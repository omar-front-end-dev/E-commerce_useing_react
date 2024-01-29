import { Container, Row } from "react-bootstrap";
import { Products_List } from "../../Components/Product_List/Products_List";
import { Page_Title } from "../../Components/Layout/Page_Title";


export function Products() {
  return (
    <div className="Products">
      <Container>
        <Row>
          <Page_Title title={"Products Page"}/>
          <Products_List/>
        </Row>
      </Container>
    </div>
  )
}
