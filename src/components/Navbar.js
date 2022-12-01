import Link from "next/link";
import clsx from "clsx";
import React, { Component } from 'react'
import AvatarButton from '../components/AvatarButton';
import { useRouter } from "next/router";
import {
  Dropdown,
  Icon,
  Image,
  Menu
} from 'semantic-ui-react'
{/*}
import { BsFillPieChartFill } from "react-icons/bs";
import { FcSettings,FcBarChart } from "react-icons/fc";
import { VscSettingsGear } from "react-icons/vsc";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
*/}


export const APP_BAR_HEIGHT = "4.5rem";

const menuStyle = {
  border: 'none',
  borderRadius: 10,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: 'blue',
  border: '3px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default function NavBar() {
  const { pathname } = useRouter();
  const state = {
    menuFixed: false,
    overlayFixed: false,
  }

  return (<>

            <Menu style={{ color: "blue" }} pointing inverted>
              <Menu.Item style={{ paddingLeft: "5px", color: "white" }}>
                <Image  width="35" src='https://react.semantic-ui.com/logo.png' />
                 Nome do projeto
              </Menu.Item>

              <Menu.Item as='a' href="/"><Icon name='home'/> Página principal</Menu.Item>

              <Menu.Item as='a' href="/cadastros"><Icon name='pencil'/>Cadastros</Menu.Item>
              <Menu.Item as='a' href="/"><Icon name='settings'/>Cnfiguraçoes</Menu.Item>

              <Menu.Menu>
                <Dropdown text='Sistema' simple className='link item'>
                  <Dropdown.Menu>
                    <Icon name='settings' size='mini' />
                    <Dropdown.Item as='a' href="/cadastros">
                     <Icon name='pencil alternate' size='mini' />
                      Cadastros
                      </Dropdown.Item>
                    <Dropdown.Item>
                    <Icon name='settings' size='mini' />
                      Configurações</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>

              <Menu.Item
               position="right"
               style={{ color: "blue",backgroundColor:"#EDBB99" }}

                as='a'>

               </Menu.Item>

          </Menu>


        </>
      );
}


