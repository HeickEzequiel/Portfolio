import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../utils/keys.js";
import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";


  const cld = new Cloudinary({
    cloud: {
        cloudName: CLOUD_NAME,
        api_key: CLOUD_API_KEY, 
        api_secret: CLOUD_API_SECRET_KEY
    },
});

const imagen1 = cld.image("portfolio/html2")
const imagen2 = cld.image("portfolio/css4")
const imagen3 = cld.image("portfolio/js")
const imagen4 = cld.image("portfolio/node2")
const imagen5 = cld.image("portfolio/express2")
const imagen6 = cld.image("portfolio/react2")
const imagen7 = cld.image("portfolio/vite2")
const imagen8 = cld.image("portfolio/zustand")
const imagen9 = cld.image("portfolio/tanstack")
const imagen10 = cld.image("portfolio/json2")
const imagen11 = cld.image("portfolio/tailwind3")
const imagen12 = cld.image("portfolio/sequelize2")
const imagen13 = cld.image("portfolio/postgre3")
const imagen14 = cld.image("portfolio/redux2")


export const html = imagen1.resize(fill().width(100).height(100))
export const css = imagen2.resize(fill().width(100).height(100))
export const js = imagen3.resize(fill().width(100).height(100))
export const node = imagen4.resize(fill().width(100).height(100))
export const express = imagen5.resize(fill().width(100).height(100))
export const react = imagen6.resize(fill().width(100).height(100))
export const vite = imagen7.resize(fill().width(100).height(100))
export const zustand = imagen8.resize(fill().width(120).height(100))
export const tanstack = imagen9.resize(fill().width(100).height(100))
export const json = imagen10.resize(fill().width(100).height(100))
export const tailwind = imagen11.resize(fill().width(120).height(100))
export const sequelize = imagen12.resize(fill().width(100).height(100))
export const postgre = imagen13.resize(fill().width(100).height(100))
export const redux = imagen14.resize(fill().width(100).height(100))


