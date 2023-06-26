import React,{useState, useEffect} from 'react'
import { Card, CardBody, CardHeader, CardText, Col, Container, Row } from 'reactstrap'
import axios from 'axios';
import Moment from 'react-moment';
import { dashboard } from '../constants/StaticData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import './DetailsPageStyles.css'

const DetailPage = () => {
  const [data, setData] = useState(null);
  const today = Date.now();

  useEffect(() => {
    axios
    .get("\data.json")
    .then((res) => setData(res.data))
    .catch(err=>console.log(err))
  },[]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='detailsPageBackground'>
    <Container>
      <Row>
        <Col md="3">
          <form>
            <input placeholder={dashboard.searchbar} className='inputbox' />
            <button type='submit' className='searchButton'><i class="fa fa-search searchIcon" area-hidden="true"></i></button>
        </form>
        </Col>
        <Col md="7"></Col>
        <Col md="2">
            <div className='d-flex'>
            <FontAwesomeIcon
            cursor='pointer'
            className="align-self-center dateWrapper"
            icon={faCalendar} 
            size="lg" 
              /> 
              <Moment format='MMM D'>{today}</Moment>
            </div>
        </Col>
      </Row>
      <div className='d-flex justify-content-between cardWrapper'>
      <p className='fw-bold welcomeText'>{dashboard.title}</p>
        <div className='plusIconContainer' >
        <div className='plusWrapper' onClick={()=>alert('Upcoming events...')}>
        <i class="fa fa-plus plusIcon"  aria-hidden="true"></i>
        </div>
        </div>
      </div>
      <Row>
      {data && 
        data?.moviecount.map((item, index)=> {
          return <>
          <Col md={3}>
          <Card className="horizontal-display-card">
            <CardBody>
              <CardHeader className='cardheader fw-bold d-flex justify-content-between'>{item.name}
              <span className='informationwrapper'>
               <i class="fa fa-ellipsis-h" aria-hidden="true" onClick={()=>alert('Upcoming events...')}></i>
               </span>
              </CardHeader>
              <CardText className='showCount fw-bold m-0'>{item.showcount}</CardText>
              <CardText>{item.count}</CardText>
            </CardBody>
          </Card>
          </Col>
          </>
        })
      }
      </Row>
      <div className='mt-5'>
      <Row>
      <Col md={7}>
      </Col>
        <Col md={7}>
        <Card className="horizontal-display-card">
          <CardBody>
            <CardHeader className='cardheader fw-bold mb-1'>{dashboard.bookingListHeader}</CardHeader>
            {data && 
              data?.bookingList.map((item, index) => {
                return <>
                <CardText className='m-0'>{item.ticket}</CardText>
                <CardText>{item.bookedby}</CardText>
                  </>
                })
              }
              </CardBody>
        </Card>
        </Col>
        <Col md={5}>
        <Card className="horizontal-display-card emptyCard">
        <CardBody>
        <CardHeader className='cardheader p-3'></CardHeader>
         
        </CardBody>
      </Card>
        </Col>
      </Row>
    </div>
    </Container>
    </div>
  )
}

export default DetailPage