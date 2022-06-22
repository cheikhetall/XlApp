import {useFormik} from "formik"
import * as Yup from "yup"
import Axios from "axios"

const Signup = () => {

const formik=useFormik({
    initialValues:{
        email:"",
        password:""
    },
    validationSchema:Yup.object({
        email:Yup.string()
        .email("Invalid email adress")
        .required("Required"),
        password:Yup.string()
        .max(15,"must be 15 characters or less")
        .min(3,"must be less than 3 characters or more")
        .required("Required")
    }),
    onSubmit:(values)=>{
        Axios.post("http://localhost:4000/signup",{
email:formik.values.email,
password:formik.values.password
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        console.log(values)
    }
})
console.log(formik.errors)
    return ( 
        <div className="signupForm">
            <form onSubmit={formik.handleSubmit}>
                <label title="email">email</label>
                <input id="email" 
                name="email"
                placeholder="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null}
                    <br />
                <label title="password">password</label>
                <input 
                id="password"
                 name="password"
                  placeholder="password"
                   type="text"
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.password}
                    />
                    { formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>:null}
                    <button type="submit" name="loginButton">submit</button>
            </form>
        </div>
     );
}
 
export default Signup;