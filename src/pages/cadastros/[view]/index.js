import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';

import { CadastrosPageLayout } from "../index";
import nestLayout from "../../utils/nestLayout";
//import { getDataSource } from './ProjetoSocialService'

const ViewPage = () => {
  const router = useRouter();
  const { view } = router.query;
  return ProjetoSocial();
  /*
  return (
    <section>
      <h3>Teste {view}</h3>
    </section>
  );*/
};

const getDataSource = () => {
    return fetch('/demo/data/ProjetoSocial.json').then(res => res.json()).then(d => d.data);
}

function ProjetoSocial() {
    let emptyRecord = {
        cod_pessoa: null,
        num_cpfcnpj_pessoa:'',
        nom_razsoc_pessoa: '',
        nom_fantasia_pessoa: null,
        idt_imagem_pessoa: null,
        txt_info_projetosocial: ''
    };

    const [dataset, setDataset] = useState(null);
    const [recordDialog, setRecordDialog] = useState(false);
    const [deleteRecordDialog, setDeleteRecordDialog] = useState(false);
    const [deleteRecordsDialog, setDeleteRecordsDialog] = useState(false);
    const [data, setData] = useState(emptyRecord);
    const [selectedRecords, setSelectedRecords] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        getDataSource().then(data => setDataset(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {
        setData(emptyRecord);
        setSubmitted(false);
        setRecordDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setRecordDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteRecordDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteRecordsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (data.nom_razsoc_pessoa.trim()) {
            let _dataset = [...dataset];
            let _data = {...data};
            if (data.cod_pessoa) {
                const index = findIndexById(data.cod_pessoa);

                _dataset[index] = _data;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Registro atualizados', life: 3000 });
            }
            else {
                _data.cod_pessoa = createId();
                _data.idt_imagem_pessoa  = 'product-placeholder.svg';
                _dataset.push(_data);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Registro Criado', life: 3000 });
            }

            setDataset(_dataset);
            setRecordDialog(false);
            setData(emptyRecord);
        }
    }

    const editRecord = (record) => {
        setData({...record});
        setRecordDialog(true);
    }

    const confirmDeleteRecord = (record) => {
        setData(record);
        setDeleteRecordDialog(true);
    }

    const deleteRecord = () => {
        let _dataset = dataset.filter(val => val.id !== product.id);
        setDataset(_products);
        setDeleteRecordDialog(false);
        setData(emptyRecord);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < dataset.length; i++) {
            if (dataset[i].cod_pessoa === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteRecordsDialog(true);
    }

    const deleteSelectedRecords = () => {
        let _dataset = dataset.filter(val => !selectedRecords.includes(val));
        setDataset(_dataset);
        setDeleteRecordsDialog(false);
        setSelectedRecords(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Registros excluidos', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _product = {...product};
        _product['category'] = e.value;
        setData(_product);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _dataset = {...data};
        _dataset[`${name}`] = val;

        setData(_dataset);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _data = {...data};
        _data[`${name}`] = val;

        setData(_data);
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={`/demo/images/ProjetoSocial/${rowData.idt_imagem_pessoa}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.idt_imagem_pessoa} className="w-4rem shadow-2" />
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editRecord(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDeleteRecord(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="flex flex-column md:flex-row md:align-items-center justify-content-between">
            <span className="p-input-icon-left w-full md:w-auto">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="pesquisar..." className="w-full lg:w-auto" />
            </span>
            <div className="mt-3 md:mt-0 flex justify-content-end">
                <Button icon="pi pi-plus" className="mr-2 p-button-rounded" onClick={openNew} tooltip="New" tooltipOptions={{position: 'bottom'}} />
                <Button icon="pi pi-trash" className="p-button-danger mr-2 p-button-rounded" onClick={confirmDeleteSelected} disabled={!selectedRecords || !selectedRecords.length} tooltip="Delete" tooltipOptions={{position: 'bottom'}} />
                <Button icon="pi pi-upload" className="p-button-help p-button-rounded" onClick={exportCSV} tooltip="Export" tooltipOptions={{position: 'bottom'}} />
            </div>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteRecord} />
        </React.Fragment>
    );

    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedRecords} />
        </React.Fragment>
    );

    return (
        <div className="max-w-[100%] max-h-screen border-round shadow-2">
            <Toast ref={toast} />

            <div className="text-3xl text-800 font-bold mb-4">Projetos Sociais</div>

            <DataTable ref={dt} value={dataset} selection={selectedRecords} onSelectionChange={(e) => setSelectedRecords(e.value)}
                dataKey="cod_pessoa" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Registro {first} de {last} of {totalRecords} registros"
                globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                <Column field="idt_imagem_pessoa" header="Logotipo" body={imageBodyTemplate}></Column>
                <Column field="num_cpfcnpj_pessoa" header="CNPJ" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="nom_razsoc_pessoa" header="Razão Social" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="nom_fantasia_pessoa" header="Fantasia" sortable style={{ minWidth: '16rem' }}></Column>
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
            </DataTable>

            <Dialog visible={recordDialog} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '40vw'}} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {data.idt_imagem_pessoa && <img src={`demo/images/product/${data.idt_imagem_pessoa}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.idt_imagem_pessoa} className="block mt-0 mx-auto mb-5 w-20rem shadow-2" />}
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={data.nom_razsoc_pessoa} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !data.nom_razsoc_pessoa })} />
                    {submitted && !data.nom_razsoc_pessoa && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputTextarea id="description" value={data.txt_info_projetosocial} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>
            </Dialog>

            <Dialog visible={deleteRecordDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {data && <span>Are you sure you want to delete <b>{data.nom_razsoc_pessoa}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteRecordsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {data && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}

const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamPageLayout mounted");
    return () => console.log("TeamPageLayout unmounted");
  }, []);

  const router = useRouter();
  const { view } = router.query;

  if (view == "ProjetoSocial")
   return ProjetoSocial()
  else
    return (
      <section>
        <h3>{view}</h3>
      </section>)
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const ViewPageLayout = nestLayout(CadastrosPageLayout, getLayout);

ViewPage.getLayout = ViewPageLayout;

export default ViewPage;
