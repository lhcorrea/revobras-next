import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import { Grid, Image, Segment,  Card, Feed, Label} from 'semantic-ui-react'
import { Button } from 'primereact/button';


export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
                <div className='relative'>
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <div>
                            <Link
                                href="/login"
                                className="text-sm text-gray-700 underline">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </div>
                    )}

                  <Grid columns={4} className="relative overflow-y-auto max-h-full max-w-full top-5 bg-slate-400">
                        <Grid.Row >
                            <Grid.Column width={4}>
                                <Segment>
                                    <Card.Group  style={{backgroundColor:"#5E615D" }}>
                                        <Card className="leading-4">
                                         <Card.Content style={{marginTop:"-10px"}} >
                                           <Label style={{marginTop:"-10px"}} className="py-1 mb-2" as='a' color='red' ribbon>
                                             PROJETO SOCIAL
                                           </Label>
                                           <Card.Header><a className="py-4 p-0">
                                              <Image  className="m-0" floated='left' width="80px" src='/img/PS1.png'/>
                                              JUNTOS SOMOS MELHORES</a>
                                           </Card.Header>

                                            <span className="h-32 min-w-full  overflow-x-hidden  hover:overflow-y-auto  text-orange-500  text-justify">
                                              eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                                              facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                                              referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                                              electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                                              ex natum rebum iisque.
                                           </span>
                                           <Card.Meta style={{ lineHeight: 1.0,fontSize:"12px",color: "blue" }}>
                                                 PRECISA DE SEU APOIO
                                                 <Button icon="pi pi-times" className="p-button-rounded p-button-danger mr-4 p-button-text" aria-label="Cancel" />
                                                 <Button icon="pi pi-heart-fill" className="p-button-rounded p-button-success p-button-text" aria-label="Filter" />
                                            </Card.Meta>
                                        </Card.Content>

                                        </Card>
                                        <Card className="leading-4">
                                         <Card.Content style={{marginTop:"-10px"}} >
                                           <Label style={{marginTop:"-10px"}} className="py-1 mb-2" as='a' color='red' ribbon>
                                             PROJETO SOCIAL
                                           </Label>
                                           <Card.Header><a className="py-4 p-0">
                                              <Image className="m-0" floated='left' width="80px" src='/img/PS2.png'/>
                                              EM AÇÃO</a>
                                           </Card.Header>

                                            <span className="h-32 min-w-full  overflow-x-hidden  hover:overflow-y-auto  text-orange-500  text-justify">
                                              eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                                              facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                                              referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                                              electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                                              ex natum rebum iisque.
                                           </span>
                                           <Card.Meta style={{ lineHeight: 1.0,fontSize:"12px",color: "blue" }}>
                                                 PRECISA DE SEU APOIO
                                                 <Button icon="pi pi-times" className="p-button-rounded p-button-danger mr-4 p-button-text" aria-label="Cancel" />
                                                 <Button icon="pi pi-heart-fill" className="p-button-rounded p-button-success p-button-text" aria-label="Filter" />
                                            </Card.Meta>
                                        </Card.Content>

                                        </Card>
                                    </Card.Group>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment>
                                  <ul>
                                    <li className="mb-2">
                                      <Image src='/img/media-paragraph.png' />
                                     </li>
                                     <li className="mb-2">
                                      <Image src='/img/media-paragraph.png' />
                                     </li>
                                     <li className="mb-2">
                                      <Image  src='/img/media-paragraph.png' />
                                     </li>
                                     <li className="mb-2">
                                      <Image  src='/img/media-paragraph.png' />
                                     </li>
                                  </ul>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Card style={{ color: "blue",backgroundColor:"#EDE498" }}>
                                    <Card.Content style={{ color: "blue",backgroundColor:"#5E615D" }}>
                                    <Card.Header >Atividades Recentes</Card.Header>
                                    </Card.Content>
                                    <Card.Content>
                                    <Feed>
                                        <Feed.Event className="mb-3">
                                        <Image width="50px" src='/img/PS3.png'/>
                                        <Feed.Content>
                                            <Feed.Date content='1 dia atrás' />
                                            <Feed.Summary>
                                            Você está APOIANDO <a>PROJETO SOCIAL DOANDO SORRISO</a>
                                            </Feed.Summary>
                                        </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event className="mb-3">
                                        <Image width="50px" src='/img/PS4.png'/>
                                        <Feed.Content>
                                            <Feed.Date content='3 dias atrás' />
                                            <Feed.Summary>
                                            Você INVESTIU no <a>PROJETO SOCIAL AMOR E ESPERANÇA</a>
                                            </Feed.Summary>
                                        </Feed.Content>
                                        </Feed.Event>

                                        <Feed.Event >
                                        <Image width="50px" src='/img/PS5.png'/>
                                        <Feed.Content>
                                            <Feed.Date content='3 dias atrás' />
                                            <Feed.Summary>
                                            Você VISITOU o <a>PROJETO SOCIAL AMOR E ESPERANÇA</a>
                                            </Feed.Summary>
                                        </Feed.Content>
                                        </Feed.Event>



                                    </Feed>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                  </Grid>
                </div>


        </>
    )
}
