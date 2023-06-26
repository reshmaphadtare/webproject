import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import DetailPage from './DetailPage';
import { dashboard } from '../constants/StaticData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBell, faUser, faUserCircle, faCalendar, faFile} from "@fortawesome/free-regular-svg-icons";
import {faFilm, faHouse, faSignOut, faTasks } from '@fortawesome/free-solid-svg-icons';
import './ProfileStyle.css'


const ProfileSection = () => {
  return (
    <div className='profileWrapper'>
    <Container fluid>
        <Row>
            <Col md="2" className='logoWrapper'>
              <p className='headline'>B<span className='boldHeading'>oo</span>king <br /> <span><span className='boldHeading logo'>W</span>indow</span></p>
              <div className='d-flex justify-content-center profileContainer'>
                  <FontAwesomeIcon
                  cursor='pointer'
                  className="align-self-center userWrapper "
                  icon={faUserCircle} 
                  size="lg" 
                    /> 
              </div>
              <p className='username fw-bold m-0 text-center'>{dashboard.userName}</p>
              <p className='text-center'>{dashboard.userType}</p>
              <div className='d-flex justify-content-center'>
              <FontAwesomeIcon
              cursor='pointer'
              className="align-self-center envelope"
              icon={faEnvelope} 
              size="lg" 
              /> 
              <div className='activeIcon'></div>
                    <FontAwesomeIcon
                    cursor='pointer'
                    className="align-self-center"
                    icon={faBell} 
                    size="lg" 
                /> 
              </div>
              <div className='linkwrapper'>
                  <div className='d-flex links link'>
                      <FontAwesomeIcon
                      cursor='pointer'
                      className="align-self-center linkSpace"
                      icon={faHouse} 
                      size="lg" 
                  /> 
                    <span className='linkIconName'>{dashboard.dashboard}</span>
                    </div>
                   <div className='verticalLine'></div>
                  <div className='link'>
                          <FontAwesomeIcon
                          cursor='pointer'
                          className="align-self-center linkSpace"
                          icon={faUser} 
                          size="lg" 
                          /> 
                        <span className='linkIconName'>{dashboard.team}</span>
                </div>
                <div className='link'>
                      <FontAwesomeIcon
                      cursor='pointer'
                      className="align-self-center linkSpace"
                      icon={faFilm} 
                      size="lg" 
                      /> 
                    <span className='linkIconName'>{dashboard.movies}</span>
                </div>
                <div className='link'>
                    <FontAwesomeIcon
                    cursor='pointer'
                    className="align-self-center linkSpace"
                    icon={faCalendar} 
                    size="lg" 
                    /> 
                    <span className='linkIconName'>{dashboard.events}</span>
                </div>
                <div className='link'>
                    <FontAwesomeIcon
                    cursor='pointer'
                    className="align-self-center linkSpace"
                    icon={faTasks} 
                    size="lg" 
                    /> 
                    <span className='linkIconName'>{dashboard.tasks}</span>
                </div>
                <div className='link'>
                    <FontAwesomeIcon
                    cursor='pointer'
                    className="align-self-center linkSpace"
                    icon={faFile} 
                    size="lg" 
                    /> 
                  <span className='linkIconName'>{dashboard.documentation}</span>
                </div>
            </div>
              <div className='d-flex sigoutWrapper'>
                <FontAwesomeIcon
                cursor='pointer'
                className="align-self-center linkSpace"
                icon={faSignOut} 
                size="lg" 
                />
                <span className='logout linkIconName'>{dashboard.logout}</span>
              </div>
             </Col>
            <Col md="10">
              <DetailPage />
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default ProfileSection