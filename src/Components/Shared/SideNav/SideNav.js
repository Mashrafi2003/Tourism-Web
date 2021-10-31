import React from 'react';
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useHistory, useLocation } from 'react-router';


const SideNavbar = () => {
    const history = useHistory();
    const location = useLocation()
    return (
        <div className='sidenav'>
            <SideNav 
            
            
    onSelect={(selected) => {
    
        const to = selected;
        if (location.pathname !== to) {
            history.push(to);
        }
        
        
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav  defaultSelected="home">
        <NavItem eventKey="/allOrder">
            <NavIcon>
                <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                All Orders
            </NavText>
            
            
        </NavItem>
        <NavItem eventKey="/addItem">
            <NavIcon>
                <i className="fa fa-fw fa-plus-square" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Add Services
            </NavText>
            
            
        </NavItem>
        <NavItem eventKey="/myOrder">
            <NavIcon>
                <i className="fa fa-fw fa-truck-moving" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                My Orders
            </NavText>
            
            
        </NavItem>
    </SideNav.Nav>
</SideNav>
        </div>
    );
};

export default SideNavbar;