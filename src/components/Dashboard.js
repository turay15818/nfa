import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CSpinner,
} from '@coreui/react'
import {
    CChartBar,
} from '@coreui/react-chartjs'



const Dashboard = () => {

    const [my_orange_app_download_for_iphone_at_regent_rd_sum, setMy_orange_app_download_for_iphone_at_regent_rd_sum] = useState(null);
    const [my_orange_app_download_for_android_at_regent_rd_sum, setMy_orange_app_download_for_android_at_regent_rd_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_regent_rd_sum, setOrange_money_africa_app_download_for_iphone_at_regent_rd_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_regent_rd_sum, setOrange_money_africa_app_download_for_android_at_regent_rd_sum] = useState(null);


    const [my_orange_app_download_for_iphone_at_kenema_sum, setMy_orange_app_download_for_iphone_at_kenema_sum] = useState(null);
    const [my_orange_app_download_for_android_at_kenema_sum, setMy_orange_app_download_for_android_at_kenema_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_kenema_sum, setOrange_money_africa_app_download_for_iphone_at_kenema_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_kenema_sum, setOrange_money_africa_app_download_for_android_at_kenema_sum] = useState(null);


    const [my_orange_app_download_for_iphone_at_kailahun_sum, setMy_orange_app_download_for_iphone_at_kailahun_sum] = useState(null);
    const [my_orange_app_download_for_android_at_kailahun_sum, setMy_orange_app_download_for_android_at_kailahun_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_kailahun_sum, setOrange_money_africa_app_download_for_iphone_at_kailahun_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_kailahun_sum, setOrange_money_africa_app_download_for_android_at_kailahun_sum] = useState(null);


    const [my_orange_app_download_for_iphone_at_wilkenson_rd_sum, setMy_orange_app_download_for_iphone_at_wilkenson_rd_sum] = useState(null);
    const [my_orange_app_download_for_android_at_wilkenson_rd_sum, setMy_orange_app_download_for_android_at_wilkenson_rd_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum, setOrange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_wilkenson_rd_sum, setOrange_money_africa_app_download_for_android_at_wilkenson_rd_sum] = useState(null);


    useEffect(() => {
        axios.get('https://heruku-app.herokuapp.com/')
            .then(response => {
                setMy_orange_app_download_for_iphone_at_regent_rd_sum(response.data.my_orange_app_download_for_iphone_at_regent_rd_sum);
                setMy_orange_app_download_for_android_at_regent_rd_sum(response.data.my_orange_app_download_for_android_at_regent_rd_sum);
                setOrange_money_africa_app_download_for_iphone_at_regent_rd_sum(response.data.orange_money_africa_app_download_for_iphone_at_regent_rd_sum);
                setOrange_money_africa_app_download_for_android_at_regent_rd_sum(response.data.orange_money_africa_app_download_for_android_at_regent_rd_sum);

                setMy_orange_app_download_for_iphone_at_kenema_sum(response.data.my_orange_app_download_for_iphone_at_kenema_sum);
                setMy_orange_app_download_for_android_at_kenema_sum(response.data.my_orange_app_download_for_android_at_kenema_sum);
                setOrange_money_africa_app_download_for_iphone_at_kenema_sum(response.data.orange_money_africa_app_download_for_iphone_at_kenema_sum);
                setOrange_money_africa_app_download_for_android_at_kenema_sum(response.data.orange_money_africa_app_download_for_android_at_kenema_sum);


                setMy_orange_app_download_for_iphone_at_kailahun_sum(response.data.my_orange_app_download_for_iphone_at_kailahun_sum);
                setMy_orange_app_download_for_android_at_kailahun_sum(response.data.my_orange_app_download_for_android_at_kailahun_sum);
                setOrange_money_africa_app_download_for_iphone_at_kailahun_sum(response.data.orange_money_africa_app_download_for_iphone_at_kailahun_sum);
                setOrange_money_africa_app_download_for_android_at_kailahun_sum(response.data.orange_money_africa_app_download_for_android_at_kailahun_sum);


                setMy_orange_app_download_for_iphone_at_wilkenson_rd_sum(response.data.my_orange_app_download_for_iphone_at_wilkenson_rd_sum);
                setMy_orange_app_download_for_android_at_wilkenson_rd_sum(response.data.my_orange_app_download_for_android_at_wilkenson_rd_sum);
                setOrange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum(response.data.orange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum);
                setOrange_money_africa_app_download_for_android_at_wilkenson_rd_sum(response.data.orange_money_africa_app_download_for_android_at_wilkenson_rd_sum);

            })
            .catch(error => console.log(error));
    }, []);

    setTimeout(function () {
        window.location.reload(1);
    }, 25000);

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <CCard className="mb-4">
            </CCard>
            <CRow className="row justify-content-md-center">
                <CCol xs={10}>
                </CCol>
                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>My Orange App Download (Iphone)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'Regent Road',
                                        'Wilkenson Road',
                                        'Kenema',
                                        'Kailahun'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253'],
                                            data: [

                                                `${my_orange_app_download_for_iphone_at_regent_rd_sum}`,
                                                `${my_orange_app_download_for_iphone_at_wilkenson_rd_sum}`,
                                                `${my_orange_app_download_for_iphone_at_kenema_sum}`,
                                                `${my_orange_app_download_for_iphone_at_kailahun_sum}`],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>My Orange App Download (Android)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'Regent Road',
                                        'Wilkenson Road',
                                        'Kenema',
                                        'Kailahun'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253'],
                                            data: [

                                                `${my_orange_app_download_for_android_at_regent_rd_sum}`,
                                                `${my_orange_app_download_for_android_at_wilkenson_rd_sum}`,
                                                `${my_orange_app_download_for_android_at_kenema_sum}`,
                                                `${my_orange_app_download_for_android_at_kailahun_sum}`],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                <br />


                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>Orange Money Africa App Download (Iphone)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'Regent Road',
                                        'Wilkenson Road',
                                        'Kenema',
                                        'Kailahun'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253'],
                                            data: [

                                                `${orange_money_africa_app_download_for_iphone_at_regent_rd_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_kenema_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_kailahun_sum}`],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            Orange Money Africa App Download (Android)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'Regent Road',
                                        'Wilkenson Road',
                                        'Kenema',
                                        'Kailahun'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253'],
                                            data: [

                                                `${orange_money_africa_app_download_for_android_at_regent_rd_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_wilkenson_rd_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_kenema_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_kailahun_sum}`],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

            </CRow>
        </>

    )
}

export default Dashboard


//     < div >
// <Navbar bg="dark" variant="dark">
//     <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//     </Container>
// </Navbar>
// <br />
// <CContainer fluid>
//     <CChart
//         type="bar"
//         data={{
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'July'],
//             datasets: [
//                 {
//                     label: 'GitHub Commits',
//                     backgroundColor: '#f87979',
//                     data: [
//                         my_orange_app_download_for_iphone_at_regent_rd_sum,
//                         my_orange_app_download_for_android_at_regent_rd_sum,
//                         orange_money_africa_app_download_for_iphone_at_regent_rd_sum,
//                         orange_money_africa_app_download_for_android_at_regent_rd_sum,

//                         my_orange_app_download_for_iphone_at_kenema_sum,
//                         my_orange_app_download_for_android_at_kenema_sum,
//                         orange_money_africa_app_download_for_iphone_at_kenema_sum,
//                         orange_money_africa_app_download_for_android_at_kenema_sum,


//                         my_orange_app_download_for_iphone_at_kailahun_sum,
//                         my_orange_app_download_for_android_at_kailahun_sum,
//                         orange_money_africa_app_download_for_iphone_at_kailahun_sum,
//                         orange_money_africa_app_download_for_android_at_kailahun_sum,


//                         my_orange_app_download_for_iphone_at_wilkenson_rd_sum,
//                         my_orange_app_download_for_android_at_wilkenson_rd_sum,
//                         orange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum,
//                         orange_money_africa_app_download_for_android_at_wilkenson_rd_sum,

//                     ],
//                 },
//             ],
//         }}
//         labels="months"
//     />
// </CContainer>