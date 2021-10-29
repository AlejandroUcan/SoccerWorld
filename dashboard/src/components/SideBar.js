import React from 'react';
import ContentWrapper from './ContentWrapper';
import {Link, Route, Switch} from 'react-router-dom';


import ContentRowMovies from './ContentRowMovies';
import UserChart from './UserChart';
import ProductChart from './ProductChart';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';
import LeaguesInDb from './LeaguesInDb';
import BrandsInDb from './BrandsInDb';
import NotFound from './NotFound';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - SoccerWorld</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Componentes</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Tabla</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/UserChart">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Tabla - Usuarios</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/ProductChart">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Tabla - Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastUserInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Registros Usuarios</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Registros Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/LeaguesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categoría - Liga</span>
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/BrandsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categoría - Marca</span>
                    </Link>
                </li>
                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                
                <Route path="/ContentRowMovies">
                  <ContentRowMovies />
                </Route>

                <Route path="/UserChart">
                  <UserChart />
                </Route>

                <Route path="/ProductChart">
                  <ProductChart />
                </Route>
                
                <Route path="/LastUserInDb">
                    <LastUserInDb />
                </Route>
               
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>

                <Route path="/LeaguesInDb">
                    <LeaguesInDb />
                </Route>

                <Route path="/BrandsInDb">
                    <BrandsInDb />
                </Route>

                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;