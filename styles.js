import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "fontFamily": "'Noto Sans', sans-serif"
    },
    "body": {
        "fontFamily": "'Noto Sans', sans-serif",
        "fontWeight": "400",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflowX": "hidden"
    },
    "navbar": {
        "marginBottom": "0px !important",
        "paddingTop": 12,
        "paddingRight": "!important",
        "paddingBottom": 12,
        "paddingLeft": "!important",
        "backgroundColor": "#FFB000!important",
        "border": "0 !important",
        "borderRadius": "0 !important"
    },
    "navbar li a": {
        "fontSize": 16,
        "fontWeight": "700",
        "color": "black !important",
        "paddingRight": 0,
        "paddingLeft": 0,
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15,
        "paddingBottom": 5
    },
    "navbar-brand": {
        "fontSize": 16,
        "fontWeight": "700",
        "color": "black !important",
        "paddingRight": 0,
        "paddingLeft": 0,
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15,
        "paddingBottom": 5
    },
    "navbar li a:hover": {
        "borderBottom": "3px solid black",
        "cursor": "pointer"
    },
    "main-frame": {
        "background": "url(images/background2.jpg) no-repeat center center fixed",
        "backgroundSize": "cover",
        "height": 90 * vh
    },
    "main-info h1": {
        "color": "black"
    },
    "main-info": {
        "marginTop": 100,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto"
    },
    "about": {
        "color": "black",
        "marginBottom": 80
    },
    "portfolio": {
        "color": "black",
        "marginBottom": 30,
        "marginTop": 30,
        "marginRight": 0,
        "marginLeft": 0,
        "backgroundColor": "#ffb000"
    },
    "contact": {
        "color": "black",
        "marginBottom": 80
    },
    "about h2": {
        "fontWeight": "700",
        "fontSize": 36,
        "paddingBottom": 5,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "portfolio h2": {
        "fontWeight": "700",
        "fontSize": 36,
        "paddingBottom": 5,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "contact h2": {
        "fontWeight": "700",
        "fontSize": 36,
        "paddingBottom": 5,
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "underline": {
        "borderBottom": "1px solid #ffb000"
    },
    "about row": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "boxShadow": "5px 5px 5px 0px rgba(205,200,205,1)"
    },
    "about col-md-5": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "about img": {
        "width": "100%"
    },
    "bio": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "bio p": {
        "fontSize": 15.5
    },
    "portfolio row": {
        "marginTop": 35,
        "marginRight": 0,
        "marginBottom": 35,
        "marginLeft": 0
    },
    "portfolio col-md-3": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "card": {
        "backgroundColor": "white",
        "boxShadow": "5px 5px 5px 0px rgba(135,130, 135,1)"
    },
    "card img": {
        "width": "100%"
    },
    "card h3": {
        "fontWeight": "700",
        "textAlign": "center",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "card p": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "card:hover": {
        "transform": "scale(1.1)",
        "transitionDuration": "0.1s"
    },
    "contact p": {
        "fontSize": 15.5
    },
    "contact button": {
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "backgroundColor": "#ffb000",
        "color": "white",
        "border": 0,
        "boxShadow": "3px 3px 3px 0px rgba(205,200,205,1)"
    },
    "contact button:hover": {
        "backgroundColor": "orange",
        "transitionDuration": "0.2s"
    }
});