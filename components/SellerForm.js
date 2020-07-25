import React, { useState } from "react";
import {
  Button,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Text,
} from "native-base";

const SellerForm = ({ navigation }) => {
  const [listingObj, setListingObj] = useState({
    donor: null,
    donor_email: null,
    title: null,
    category: null,
    description: null,
    price: null,
  });

  const handleChange = (event, name) => {
    setListingObj({ ...listingObj, [name]: event.nativeEvent.text });
  };

  const validateForm = () => {
    let keys = Object.keys(listingObj)
    let result = []
    keys.forEach(key => {
      if(listingObj[key] === null || listingObj[key] === '') {
        result.push(key)
      } 
    })
    if(result.length === 0) {
      console.log('navigate')
    } else {
      console.log('denied')
    }
   }

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Your Name</Label>
            <Input onChange={(event) => handleChange(event, "donor")} />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChange={(event) => handleChange(event, "donor_email")} />
          </Item>
          <Item floatingLabel>
            <Label>Item Name</Label>
            <Input onChange={(event) => handleChange(event, "title")} />
          </Item>
          <Item floatingLabel>
            <Label>Item Description</Label>
            <Input onChange={(event) => handleChange(event, "description")} />
          </Item>
          <Item floatingLabel>
            <Label>Minimum Bid</Label>
            <Input onChange={(event) => handleChange(event, "price")} />
          </Item>
          <Item picker last>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: 300 }}
              placeholder="Item Category"
              selectedValue={listingObj.category}
              onValueChange={(event) =>
                setListingObj({
                  ...listingObj,
                  category: event,
                })
              }
            >
              <Picker.Item label="Electronics" value="electronics" />
              <Picker.Item label="Home" value="home" />
              <Picker.Item label="Furniture" value="furniture" />
              <Picker.Item label="Baby/Kids" value="baby" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </Item>
          <Button block onPress={() => validateForm()}>
            <Text>Continue</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SellerForm;