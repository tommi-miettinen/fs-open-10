import FormikTextInput from "./FormikTextInput";
import { StyleSheet, View, Button } from "react-native";
import { Formik } from "formik";

import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInFrom = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <View />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <View />
      <Button onPress={onSubmit} label="Sign In" />
    </View>
  );
};

const SignIn = () => {
  const onSubmit = async (values) => {
    console.log(values, username, password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInFrom onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
