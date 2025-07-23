import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import '../../AllCss/Home.css'
import RoomUI from '../RoomPage/RoomUI'
import RoomData from '../RoomPage/RoomData'

const Room = () => {
  const formik = useFormik({
      initialValues: {
        holidayName: "",
      },
      validationSchema: Yup.object({
        holidayName: Yup.string().required()
      }),
      onSubmit: (values) => {
        console.log(values)
      }
    })
  return (
    <div>
      <div className='image-background-room'>
        <div className='padding-size'>
          <div className='size'>
            <p style={{marginBottom: '0px'}}>Our Packages</p>
            <h1 className='top-size'>Search your Holiday</h1>
          </div>
          <div className='input-change'>
            <form onSubmit={formik.handleSubmit}>
              <input
                className='input-change-size' 
                type="text"
                name='holidayName' 
                placeholder='Search your Holiday'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
                value={formik.values.holidayName} 
              />
              {formik.touched.holidayName && formik.errors.holidayName ? <p>{formik.values.holidayName}</p> : null}
            </form>
          </div>
        </div>
      </div>
      <RoomData />
    </div>
  )
}

export default Room
