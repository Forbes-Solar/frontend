import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from "styled-components";




const Sidebarmenuitem = styled.div`
    display: flex;
    align-items: center;
    place-content: flex-start;
    padding: 1rem 3rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: #555;
    transition: color 0.3s ease-in-out;
`;

const SidebarT= styled.div`
position: fixed;
  margin-top: 50px;
    left: 0;
    height: 100vh;
    width: 320px;
    background-color: darkblue;
`;

const Sidebarmenu= styled.div`
position: relative;
margin-top: 50px;
   
`;

const Sidebarmenuitemicon = styled.div`
margin-right: 1rem;
   
`;

const Sidebarmenuitemtext = styled.div`
font-size: 1.75rem;
color: orange;
   
`;

const Sidebarmenuindicator= styled.div`
position: absolute;
top: 0;
left: 50%;
width: calc(100% - 40px);
border-radius: 10px;
background-color: #fff;
z-index: -1;
transform: translateX(-50%);
transition: 0.3s ease-in-out;
   
`;

const sidebarNavItems = [
   
    {
        display: 'Overview',
        icon: <i className='bx bx-star'></i>,
        to: '/app/started',
        section: 'started'
    },
    {
        display: 'Transactions',
        icon: <i className='bx bx-calendar'></i>,
        to: '/app/calendar',
        section: 'calendar'
    },
    {
        display: 'Profile',
        icon: <i className='bx bx-user'></i>,
        to: '/app/user',
        section: 'user'
    },
    {
        display: 'Orders',
        icon: <i className='bx bx-receipt'></i>,
        to: '/app/order',
        section: 'order'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector(Sidebarmenuitem );
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('app/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return ( 
    
    <SidebarT>
       
        <Sidebarmenu ref={sidebarRef}>
            <Sidebarmenuindicator
                ref={indicatorRef}
               
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></Sidebarmenuindicator>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <Sidebarmenuitem >
                            <Sidebarmenuitemicon>
                                {item.icon}
                            </Sidebarmenuitemicon>
                            <Sidebarmenuitemtext>
                                {item.display}
                            </Sidebarmenuitemtext>
                        </Sidebarmenuitem >
                    </Link>
                ))
            }
        </Sidebarmenu>
    </SidebarT>
    )
};

export default Sidebar;