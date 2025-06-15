import { Col, Row } from "react-bootstrap";
import logo from "../../imgs/logo-Meta.png";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { getAllMovie, getAllMovieSearch } from "../../redux/actione/movieAction";
import axios from "axios";

function NavScrollExample() {
  const onSearch = (word) => {
    search(word);
  };


  
    const dispatch = useDispatch();
   const search = async (word) => {
    if (word === "") {
     dispatch(getAllMovie())
    } else {
     dispatch(getAllMovieSearch(word))
   
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfc" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="bi bi-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="بحث..."
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavScrollExample;
