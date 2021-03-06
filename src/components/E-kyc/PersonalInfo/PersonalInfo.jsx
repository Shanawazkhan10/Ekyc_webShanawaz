import React, { useState } from "react";
import "./PersonalInfo.css";
import TextField from "@material-ui/core/TextField";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, MenuItem } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import PersonalImg from "../../../images/Personal_Details_Illustration.png";
import { useHistory } from "react-router";
const PersonalInfo = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    mstatus: "",
    income: "",
    gender: "",
    political: "",
    occupation: "",
    experience: "",
    motherName: "",
    fatherName: "",
  });
  const { control } = useForm();
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 300,
    },
  }));
  const classes = useStyles();
  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(inputs);
    history.push("/AccountOpen");
    // window.location = "/PanOrc";
    // console.log(state);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="m-4" md="6">
            <Image className="login-img-res" src={PersonalImg} fluid />
          </Col>
          <Col>
            <div className="form-info">
              <Row>
                <Col>
                  <h3 className="float-left">Personal Details</h3>
                  <br />
                  <hr className="hr-personal color-gradiant" />
                </Col>
              </Row>
              <Row>
                <Col md="6" sm="12" className="mt-2  div-center">
                  <div className="form-group master-textField">
                    <TextField
                      type="text"
                      id="fieldSelectorname"
                      name="fatherName"
                      value={inputs.fatherName}
                      onChange={handleInputChange}
                      className="form-control"
                      label="Father's Full Name"
                      autoComplete="off"
                      variant="outlined"
                    />
                  </div>
                </Col>

                <Col md="6" sm="12" className="mt-2">
                  <div className="form-group master-textField">
                    <TextField
                      type="text"
                      id="fieldSelectorname"
                      name="motherName"
                      value={inputs.motherName}
                      onChange={handleInputChange}
                      className="form-control"
                      label="Mother's Full Name"
                      autoComplete="off"
                      variant="outlined"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md="6" sm="12" className="mt-3">
                  <div className="form-group master-textField">
                    <FormControl
                      variant="outlined"
                      key="Marital Status"
                      fullWidth
                    >
                      <InputLabel required={true}>Marital dddddStatus</InputLabel>
                      <Controller
                        render={() => (
                          <Select
                            size="large"
                            name="mstatus"
                            defaultValue={inputs.mstatus}
                            onChange={handleInputChange}
                            label="Marital Status"
                          >
                            <MenuItem value="" disabled>
                              Marital Status
                            </MenuItem>
                            <MenuItem value={"Single"}>Single</MenuItem>
                            <MenuItem value={"Married"}>Married</MenuItem>
                            <MenuItem value={"Divorced"}>Divorced</MenuItem>
                          </Select>
                        )}
                        name="appliance"
                        control={control}
                        // defaultValue=""
                        rules={{
                          required: "Please Choose Your Appliance.",
                        }}
                      />
                    </FormControl>
                  </div>
                </Col>
                <Col md="6" sm="12" className="mt-3">
                  <div className="form-group  master-textField">
                    <FormControl variant="outlined" key="Appliances" fullWidth>
                      <InputLabel required={true}>Gender</InputLabel>
                      <Controller
                        render={() => (
                          <Select
                            size="large"
                            name="gender"
                            defaultValue={inputs.gender}
                            onChange={handleInputChange}
                            label="Gender"
                          >
                            <MenuItem value="" disabled>
                              Gender
                            </MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                          </Select>
                        )}
                        name="appliance"
                        control={control}
                        // defaultValue=""
                        rules={{
                          required: "Please Choose Your Appliance.",
                        }}
                      />
                      {/* <FormHelperText>{errors.appliance?.message}</FormHelperText> */}
                    </FormControl>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mt-2" md="6" sm="12">
                  <h3 className="float-left">Background</h3>
                  <br />
                  <hr className="hr-personal color-gradiant" />
                </Col>
              </Row>
              <Row>
                <Col md="6" sm="12" className="mt-2">
                  <div className=" master-textField">
                    <FormControl
                      variant="outlined"
                      key="Annual Income"
                      // error={Boolean(errors.appliance)}
                      fullWidth
                    >
                      <InputLabel required={true}>Annual Income</InputLabel>
                      <Controller
                        render={(props) => (
                          <Select
                            size="large"
                            name="income"
                            defaultValue={inputs.income}
                            onChange={handleInputChange}
                            label="Appliances"
                          >
                            <MenuItem value="" disabled>
                              Annual Income
                            </MenuItem>
                            <MenuItem value={"less then 500000"}>
                              less then 500000
                            </MenuItem>
                            <MenuItem value={"More then 500000"}>
                              More then 500000
                            </MenuItem>
                            <MenuItem value={"less then 1000000"}>
                              less then 1000000
                            </MenuItem>
                            <MenuItem value={"More then 1000000"}>
                              More then 1000000
                            </MenuItem>
                            {/* <MenuItem value={"Trash Compactor"}>Trash Compactor</MenuItem> */}
                          </Select>
                        )}
                        name="appliance"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please Choose Your Appliance.",
                        }}
                      />
                      {/* <FormHelperText>{errors.appliance?.message}</FormHelperText> */}
                    </FormControl>
                  </div>
                </Col>
                <Col md="6" sm="12" className="mt-2">
                  <div className="form-group master-textField">
                    <FormControl
                      variant="outlined"
                      key="Appliances"
                      // error={Boolean(errors.appliance)}
                      fullWidth
                    >
                      <InputLabel required={true}>Occupation</InputLabel>
                      <Controller
                        render={(props) => (
                          <Select
                            size="large"
                            name="occupation"
                            defaultValue={inputs.occupation}
                            onChange={handleInputChange}
                            label="Appliances"
                          >
                            <MenuItem value="" disabled>
                              Occupation
                            </MenuItem>
                            <MenuItem value={"Private Sector"}>
                              Private Sector
                            </MenuItem>
                            <MenuItem value={"Govt. Sector"}>
                              Govt. Sector
                            </MenuItem>
                            <MenuItem value={"Self"}>Self</MenuItem>
                            {/* <MenuItem value={"Range"}>Range</MenuItem>
                  <MenuItem value={"Trash Compactor"}>Trash Compactor</MenuItem> */}
                          </Select>
                        )}
                        name="appliance"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please Choose Your Appliance.",
                        }}
                      />
                      {/* <FormHelperText>{errors.appliance?.message}</FormHelperText> */}
                    </FormControl>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md="6" sm="12">
                  <div className="form-group master-textField">
                    <FormControl
                      variant="outlined"
                      key="Appliances"
                      // error={Boolean(errors.appliance)}
                      fullWidth
                    >
                      <InputLabel required={true}>
                        Trading Experience
                      </InputLabel>
                      <Controller
                        render={(props) => (
                          <Select
                            size="large"
                            name="experience"
                            defaultValue={inputs.experience}
                            onChange={handleInputChange}
                            label="Appliances"
                          >
                            <MenuItem value="" disabled>
                              Trading Experience
                            </MenuItem>
                            <MenuItem value={"Begginer"}>Begginer</MenuItem>
                            <MenuItem value={"Intermediate"}>
                              Intermediate
                            </MenuItem>
                            <MenuItem value={"Advanced"}>Advanced</MenuItem>
                            {/* <MenuItem value={"Range"}>Range</MenuItem>
                  <MenuItem value={"Trash Compactor"}>Trash Compactor</MenuItem> */}
                          </Select>
                        )}
                        name="appliance"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please Choose Your Appliance.",
                        }}
                      />
                      {/* <FormHelperText>{errors.appliance?.message}</FormHelperText> */}
                    </FormControl>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="form-group master-textField">
                    <FormControl
                      variant="outlined"
                      key="Appliances"
                      // error={Boolean(errors.appliance)}
                      fullWidth
                    >
                      <InputLabel required={true}>
                        Politically Exposed
                      </InputLabel>
                      <Controller
                        render={(props) => (
                          <Select
                            size="large"
                            name="political"
                            defaultValue={inputs.political}
                            onChange={handleInputChange}
                            label="Appliances"
                          >
                            <MenuItem value="" disabled>
                              Politically Exposed
                            </MenuItem>
                            <MenuItem value={"yes"}>Yes</MenuItem>
                            <MenuItem value={"no"}>No</MenuItem>
                            {/* <MenuItem value={"Ice Maker"}>Ice Maker</MenuItem>
                  <MenuItem value={"Range"}>Range</MenuItem>
                  <MenuItem value={"Trash Compactor"}>Trash Compactor</MenuItem> */}
                          </Select>
                        )}
                        name="appliance"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please Choose Your Appliance.",
                        }}
                      />
                      {/* <FormHelperText>{errors.appliance?.message}</FormHelperText> */}
                    </FormControl>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <Button
                    fullWidth="true"
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-comman text-white"
                  >
                    Proceed
                  </Button>
                </Col>
                <Col md="3"></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default PersonalInfo;
// <form style={{ textAlign: "center" }}>
// <h3> Personal Details</h3>
// <select class="select">
//   <option
//     name="mstatus"
//     value={inputs.mstatus}
//     onChange={(e) => handleInputChange}
//     selected
//     disabled
//   >
//     Marital status
//   </option>
//   <option value="1">Single</option>
//   <option value="2">Married</option>
//   <option value="3">Divorced</option>
// </select>
// <br />
// <br />
// <select class="select">
//   <option name="income" value={inputs.income} selected disabled>
//     Income
//   </option>
//   <option value="1">Below 500000</option>
//   <option value="2">Above 500000</option>
// </select>
// <br />
// <br />
// <select class="select">
//   <option
//     // value=""
//     selected
//     disabled
//   >
//     Is Political Exposed
//   </option>
//   <option value="Yes">Yes</option>
//   <option value="2">No</option>
// </select>
// <br />
// <TextField
//   value={inputs.fatherName}
//   name="fatherName"
//   onChange={handleInputChange}
//   id="standard-basic"
//   label="Father Full Name"
// />
// <br />
// <TextField
//   value={inputs.motherName}
//   name="motherName"
//   onChange={handleInputChange}
//   id="standard-basic"
//   label="Mother Full Name"
// />
// <br />
// <br />
// <button
//   className="btn btn-primary"
//   onClick={handleSubmit}
// >
//   Submit
// </button>
// </form>
