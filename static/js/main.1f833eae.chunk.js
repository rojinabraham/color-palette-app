(this["webpackJsonpcolor-palette-app"]=this["webpackJsonpcolor-palette-app"]||[]).push([[0],{197:function(e,a,t){e.exports=t.p+"static/media/bg.3ae910d0.svg"},222:function(e,a,t){e.exports=t(414)},227:function(e,a,t){},237:function(e,a,t){},414:function(e,a,t){"use strict";t.r(a);var o,n,r=t(0),l=t.n(r),c=t(8),i=t.n(c),s=(t(227),t(91)),m=t(20),d=t(21),u=t(25),p=t(24),h=t(29),g=t(477),f=t(475),b=t(27),v=t(11),C=t(191),E=t(53),y=t(6),x=t(49),w=t.n(x),j=function(e){return"@media (max-width:".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")},k={colorBox:(o={width:"20%",height:function(e){return e.showAll?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px","&:hover button":{opacity:1}},Object(v.a)(o,j("lg"),{width:"25%",height:function(e){return e.showAll?"20%":"33.3333%"}}),Object(v.a)(o,j("md"),{width:"50%",height:function(e){return e.showAll?"10%":"20%"}}),Object(v.a)(o,j("xs"),{width:"100%",height:function(e){return e.showAll?"5%":"10%"}}),o),copyText:{color:function(e){return w()(e.background).luminance()>=.7?"rgba(0,0,0,0.5)":"white"}},colorName:{color:function(e){return w()(e.background).luminance()<=.08?"white":"rgba(0,0,0,0.5)"}},seeMore:{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",color:function(e){return w()(e.background).luminance()<=.7?"rgba(0,0,0,0.5)":"white"},width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:function(e){return w()(e.background).luminance()<=.7?"rgba(0,0,0,0.5)":"white"},textTransform:"uppercase",border:"none",transition:"0.3s ease-in",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(v.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},j("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},O=t(16),S=t.n(O),N=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showLink,r=e.classes,c=this.state.copied;return l.a.createElement(C.CopyToClipboard,{text:t,onCopy:this.changeCopyState},l.a.createElement("div",{style:{background:t},className:r.colorBox},l.a.createElement("div",{style:{background:t},className:S()(r.copyOverlay,Object(v.a)({},r.showOverlay,c))}),l.a.createElement("div",{className:S()(r.copyMessage,Object(v.a)({},r.showMessage,c))},l.a.createElement("h1",null,"Copied!"),l.a.createElement("p",{className:r.copyText},t)),l.a.createElement("div",null,l.a.createElement("div",{className:r.boxContent},l.a.createElement("span",{className:r.colorName},a)),l.a.createElement("button",{className:r.copyButton},"Copy")),n&&l.a.createElement(E.b,{onClick:function(e){return e.stopPropagation()},to:o},l.a.createElement("span",{className:r.seeMore},"MORE"))))}}]),t}(r.Component),P=Object(y.a)(k)(N),F={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(n={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px",opacity:1,backgroundColor:"black","& a":{width:"100px",height:"30px",color:"white",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",transition:"0.3s ease-in",textDecoration:"none"}},Object(v.a)(n,j("lg"),{width:"25%",height:function(){return console.log(j("lg"))}}),Object(v.a)(n,j("md"),{width:"50%",height:"20%"}),Object(v.a)(n,j("xs"),{width:"100%",height:"10%"}),n)},B=t(474),D=t(459),I=t(476),A=t(460),T=t(112),L=t.n(T),R=t(203),G=(t(236),{NavBar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(v.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},j("xs"),{display:"none"}),slider:Object(v.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"6px"},"& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},j("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),M=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).closeSnackbar=function(){o.setState({open:!1})},o.state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"handleFormatChange",value:function(e){var a=this;this.setState({format:e.target.value,open:!0},(function(){return a.props.handleChange(a.state.format)}))}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showAll,n=e.classes,r=this.state.format;return console.log(n.selectContainer),l.a.createElement("header",{className:n.NavBar},l.a.createElement("div",{className:n.logo},l.a.createElement(E.b,{to:"/color-palette-app/"},"ReactColorPicker")),o&&l.a.createElement("div",null,l.a.createElement("span",null,"Level: ",a),l.a.createElement("div",{className:n.slider},l.a.createElement(R.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),l.a.createElement("div",{className:n.selectContainer},l.a.createElement(B.a,{value:r,onChange:this.handleFormatChange},l.a.createElement(D.a,{value:"hex"},"HEX - #FFFFFF"),l.a.createElement(D.a,{value:"rgb"},"RGB - rgba(255, 255, 255) "),l.a.createElement(D.a,{value:"rgba"},"RGBA - rgba(255, 255, 255, 1.0)")),l.a.createElement(I.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:l.a.createElement("span",{id:"message-id"},"Format Changed to ",r.toUpperCase()),ContentProps:{"aria-decribedby":"message-id"},onClose:this.closeSnackbar,action:[l.a.createElement(A.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},l.a.createElement(L.a,null))]})))}}]),t}(r.Component),z=Object(y.a)(G)(M);var U,H,V=Object(y.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.classes;return l.a.createElement("footer",{className:a.PaletteFooter},e.name,l.a.createElement("span",{className:a.emoji},e.emoji))})),q=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).changeLevel=function(e){o.setState({level:e})},o.state={level:500,format:"hex"},o.changeFormat=o.changeFormat.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map((function(e){return l.a.createElement(P,{showAll:!0,showLink:!0,paletteId:n,id:e.id,key:e.id,background:e[s],name:e.name,moreUrl:"/color-palette-app/palette/".concat(n,"/").concat(e.id)})}));return l.a.createElement("div",{className:r.Palette},l.a.createElement(z,{level:i,changeLevel:this.changeLevel,handleChange:this.changeFormat,showAll:!0}),l.a.createElement("div",{className:r.colors},m),l.a.createElement(V,{name:t,emoji:o}))}}]),t}(r.Component),W=Object(y.a)(F)(q),J=t(113),Y=t.n(J),K=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).deletePalete=o.deletePalete.bind(Object(b.a)(o)),o.handleClick=o.handleClick.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"deletePalete",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return l.a.createElement("div",{className:a.miniColor,key:e.name,style:{background:e.color}})}));return l.a.createElement("div",{className:a.root,onClick:this.handleClick},l.a.createElement(Y.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalete}),l.a.createElement("div",{className:a.colors},n," "),l.a.createElement("h5",{className:a.title},t," ",l.a.createElement("span",{className:a.emoji},o)))}}]),t}(r.PureComponent),_=Object(y.a)({root:{backgroundColor:"white",borderRadius:"5px",border:"1px solid black",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",heigth:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"50px",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-6.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:"10",opacity:"0"}})(K),Q=t(197),X={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#330033",backgroundImage:"url(".concat(t.n(Q).a,")"),overflow:"auto"},heading:{forntSize:"2rem"},container:(U={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(v.a)(U,j("xl"),{width:"65%"}),Object(v.a)(U,j("xs"),{width:"70%"}),U),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{cursor:"pointer",color:"white"}},palettes:(H={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"5%"},Object(v.a)(H,j("sm"),{gridTemplateColumns:"repeat(2,50%)"}),Object(v.a)(H,j("xs"),{gridTemplateColumns:"repeat(1,100%)"}),H)},$=t(461),Z=t(458),ee=t(415),ae=t(463),te=t(478),oe=t(464),ne=t(198),re=t.n(ne),le=t(462),ce=t(140),ie=t.n(ce),se=t(141),me=t.n(se),de=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).openDialog=function(e){o.setState({openDeleteDialog:!0,deletingId:e})},o.closeDialog=function(){o.setState({openDeleteDialog:!1})},o.handleDelete=function(){o.props.deletePalette(o.state.deletingId),o.closeDialog()},o.state={openDeleteDialog:!1,deletingId:""},o.goToPalette=o.goToPalette.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/color-palette-app/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.container},l.a.createElement("nav",{className:o.nav},l.a.createElement("h1",{className:o.heading},"React Colors"),l.a.createElement(E.b,{to:"/color-palette-app/palette/new"},"Create Palette")),l.a.createElement(g.a,{className:o.palettes},t.map((function(a){return l.a.createElement(f.a,{key:a.id,classNames:"fade",timeout:500},l.a.createElement(_,Object.assign({key:a.id,id:a.id,openDialog:e.openDialog},a,{goToPalette:e.goToPalette})))})))),l.a.createElement($.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},l.a.createElement(le.a,{id:"delete-dialog-title"},"Delete This Palette?"),l.a.createElement(Z.a,null,l.a.createElement(ee.a,{button:!0,onClick:this.handleDelete},l.a.createElement(ae.a,null,l.a.createElement(te.a,{style:{backgroundColor:ie.a[100],color:ie.a[600]}},l.a.createElement(re.a,null))),l.a.createElement(oe.a,{primary:"Delete"})),l.a.createElement(ee.a,{button:!0,onClick:this.closeDialog},l.a.createElement(ae.a,null,l.a.createElement(te.a,{style:{backgroundColor:me.a[100],color:me.a[600]}},l.a.createElement(L.a,null))),l.a.createElement(oe.a,{primary:"Cancel"})))))}}]),t}(r.Component),ue=Object(y.a)(X)(de),pe=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).gatherShades=o.gatherShades.bind(Object(b.a)(o)),o.changeFormat=o.changeFormat.bind(Object(b.a)(o)),o._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o}return Object(d.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n]).filter((function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this.props.classes,c=this._shades.map((function(a){return l.a.createElement(P,{showLink:!1,key:a.name,name:a.name,background:a[e.state.format]})}));return console.log(this.props),l.a.createElement("div",{className:r.Palette},l.a.createElement(z,{showAll:!1,handleChange:this.changeFormat}),l.a.createElement("div",{className:r.colors},c,l.a.createElement("div",{className:r.goBack},l.a.createElement(E.b,{to:"/color-palette-app/palette/".concat(n)},"Go Back"))),l.a.createElement(V,{name:t,emoji:o}))}}]),t}(r.Component),he=Object(y.a)(F)(pe);t(237);var ge,fe=function(e){var a=e.children;return l.a.createElement("section",{className:"page"},a)},be=t(479),ve=t(72),Ce=t(473),Ee=t(202),ye=t.n(Ee),xe=t(468),we=t(77),je={root:(ge={height:"25%",width:"20%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-7px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(v.a)(ge,j("lg"),{width:"20%",height:"20%"}),Object(v.a)(ge,j("md"),{width:"45%",height:"10%"}),Object(v.a)(ge,j("sm"),{width:"100%",height:"5%"}),ge),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return w()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.5)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"14px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.2s ease-in-out",color:"rgba(0,0,0,0.6)"}},ke=Object(we.b)((function(e){var a=e.classes,t=e.handleClick;return l.a.createElement("div",{className:a.root,style:{backgroundColor:e.color}},l.a.createElement("div",{className:a.boxContent},l.a.createElement("span",null,e.name),l.a.createElement(Y.a,{className:a.deleteIcon,onClick:t})))})),Oe=Object(y.a)(je)(ke);var Se=Object(we.a)((function(e){var a=e.colors,t=e.deleteColor;return l.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return l.a.createElement(Oe,{handleClick:function(){return t(e.name)},color:e.color,name:e.name,key:e.name,index:a})})))})),Ne=t(469),Pe=t(470),Fe=t(471),Be=t(472),De=t(204),Ie=t(467),Ae=t(465),Te=t(466),Le=t(60),Re=(t(250),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.showEmojiPicker=function(){o.setState({stage:"emoji"})},o.savePalette=function(e){var a={paletteName:o.state.newPaletteName,emoji:e.native};o.props.handleSubmit(a),o.setState({stage:""})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Le.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))})),console.log(this.props.palettes)}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return l.a.createElement("div",null,l.a.createElement($.a,{onClose:o,open:"emoji"===t},l.a.createElement(De.a,{title:"Pick a Title Emoji",onSelect:this.savePalette})),l.a.createElement($.a,{open:"form"===t,onClose:o,"aria-labelledby":"form-dialog-title"},l.a.createElement(le.a,{id:"form-dialog-title"},"Choose Palette Name"),l.a.createElement(Le.ValidatorForm,{onSubmit:this.showEmojiPicker},l.a.createElement(Ae.a,null,l.a.createElement(Te.a,null,"Please enter name for your Palette. Make sure it is unique."),l.a.createElement(Le.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),l.a.createElement(Ie.a,null,l.a.createElement(xe.a,{onClick:o,color:"primary"},"Cancel"),l.a.createElement(xe.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(r.Component)),Ge=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(v.a)({marginRight:"1rem","& a":{textDecorations:"none"}},j("xs"),{marginRight:"0.5rem"}),button:Object(v.a)({margin:"0 0.5rem"},j("xs"),{margin:"0 0.2rem",padding:"0.2rem"})}},Me=t(200),ze=t.n(Me),Ue=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).handleChange=function(e){o.setState(Object(v.a)({},e.target.name,e.target.value))},o.showForm=function(){o.setState({formShowing:!0})},o.hideForm=function(){o.setState({formShowing:!1})},o.state={newPaletteName:"",formShowing:!1},o}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,r=e.handleDrawerOpen,c=this.state.formShowing;return l.a.createElement("div",{className:a.root},l.a.createElement(Ne.a,null),l.a.createElement(Pe.a,{position:"fixed",color:"default",className:S()(a.appBar,Object(v.a)({},a.appBarShift,t))},l.a.createElement(Fe.a,{disableGutters:!t},l.a.createElement(A.a,{color:"inherit","aria-label":"Open drawer",onClick:r,className:S()(a.menuButton,Object(v.a)({},a.hide,t))},l.a.createElement(ze.a,null)),l.a.createElement(ve.a,{variant:"h6",color:"inherit",noWrap:!0},"Create Palette")),l.a.createElement("div",{className:a.navBtns},l.a.createElement(Be.a,{to:"/color-palette-app/"},l.a.createElement(xe.a,{className:a.button,variant:"contained",color:"secondary"},"Go Back")),l.a.createElement(xe.a,{className:a.button,variant:"contained",color:"primary",onClick:this.showForm},"Save!"),c&&l.a.createElement(Re,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))))}}]),t}(r.Component),He=Object(y.a)(Ge,{withTheme:!0})(Ue),Ve=t(201),qe={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",marginTop:"1rem",fontSize:"1.5rem"},colorNameInput:{width:"100%",height:"50px","& colorNameInput:first child":{height:"60px"}}},We=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(b.a)(o)),o.handleChange=o.handleChange.bind(Object(b.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(b.a)(o)),o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;Le.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Le.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteFull,t=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return l.a.createElement("div",null,l.a.createElement(Ve.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),l.a.createElement(Le.ValidatorForm,{instantValidate:!1,onSubmit:this.handleSubmit,ref:"form"},l.a.createElement(Le.TextValidator,{value:r,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"],className:t.colorNameInput}),l.a.createElement(xe.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),t}(r.Component),Je=Object(y.a)(qe)(We),Ye=t(142),Ke=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Ye.a)(Object(Ye.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:"0",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","& div:nth-child(3)":{width:"100%"}},buttons:{width:"100%"},button:{width:"50%"}}},_e=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83e\udd98",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Qe=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.addNewColor=function(e){o.setState({colors:[].concat(Object(s.a)(o.state.colors),[e]),newColorName:""})},o.handleChange=function(e){o.setState(Object(v.a)({},e.target.name,e.target.value))},o.handleSubmit=function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=o.state.colors,o.props.handleSavePalette(e),o.props.history.push("/color-palette-app/")},o.deleteColor=function(e){o.setState({colors:o.state.colors.filter((function(a){return a.name!==e}))})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(we.c)(o,a,t)}}))},o.clearColors=function(){o.setState({colors:[]})},o.addRandomColor=function(){for(var e,a,t=o.props.palettes.map((function(e){return e.colors})).flat(),n=!0;n;)e=Math.floor(Math.random()*t.length),a=t[e],n=o.state.colors.some((function(e){return e.name===a.name}));o.setState({colors:[].concat(Object(s.a)(o.state.colors),[a])})},o.state={open:!0,colors:_e[0].colors},o}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,r=n.open,c=n.colors,i=c.length>=t;return l.a.createElement("div",{className:a.root},l.a.createElement(He,{open:r,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),l.a.createElement(be.a,{className:a.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:a.drawerPaper}},l.a.createElement("div",{className:a.drawerHeader},l.a.createElement(A.a,{onClick:this.handleDrawerClose},l.a.createElement(ye.a,null))),l.a.createElement(Ce.a,null),l.a.createElement("div",{className:a.container},l.a.createElement(ve.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),l.a.createElement("div",{className:a.buttons},l.a.createElement(xe.a,{onClick:this.clearColors,variant:"contained",color:"secondary",className:a.button},"Clear Palette"),l.a.createElement(xe.a,{onClick:this.addRandomColor,variant:"contained",color:"primary",disabled:i,className:a.button},i?"Palette Full":"Random Color")),l.a.createElement(Je,{addNewColor:this.addNewColor,paletteIsFull:i,colors:c}))),l.a.createElement("main",{className:S()(a.content,Object(v.a)({},a.contentShift,r))},l.a.createElement("div",{className:a.drawerHeader}),l.a.createElement(Se,{colors:c,deleteColor:this.deleteColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(r.Component);Qe.defaultProps={maxColors:20};var Xe=Object(y.a)(Ke,{withTheme:!0})(Qe),$e=t(143),Ze=[50,100,200,300,400,500,600,700,800,900];function ea(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object($e.a)(Ze);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object($e.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,w.a.scale(function(e){return[w()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var d in m)t.colors[Ze[d]].push({name:"".concat(s.name," ").concat(Ze[d]),hex:m[d],id:s.name.toLowerCase().replace(/ /g,"-"),rgb:w()(m[d]).css(),rgba:w()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){i.e(u)}finally{i.f()}return t}var aa=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var o;Object(m.a)(this,t),(o=a.call(this,e)).findPalette=function(e){return o.state.palettes.find((function(a){return a.id===e}))},o.savePalette=function(e){o.setState({palettes:[].concat(Object(s.a)(o.state.palettes),[e])},o.syncLocalStorage)},o.syncLocalStorage=function(){window.localStorage.setItem("palettes",JSON.stringify(o.state.palettes))},o.deletePalette=function(e){o.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),o.syncLocalStorage)};var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||_e},o}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h.a,{render:function(a){var t=a.location;return l.a.createElement(g.a,null,l.a.createElement(f.a,{key:t.key,classNames:"page",timeout:500},l.a.createElement(h.c,{location:t},l.a.createElement(h.a,{exact:!0,path:"/color-palette-app/palette/new",render:function(a){return l.a.createElement(fe,null,l.a.createElement(Xe,Object.assign({palettes:e.state.palettes,handleSavePalette:e.savePalette},a)))}}),l.a.createElement(h.a,{exact:!0,path:"/color-palette-app/",render:function(a){return l.a.createElement(fe,null,l.a.createElement(ue,Object.assign({},a,{palettes:e.state.palettes,deletePalette:e.deletePalette})))}}),l.a.createElement(h.a,{exact:!0,path:"/color-palette-app/palette/:id",render:function(a){return l.a.createElement(fe,null,l.a.createElement(W,{palette:ea(e.findPalette(a.match.params.id))}))}}),l.a.createElement(h.a,{exact:!0,path:"/color-palette-app/palette/:paletteId/:colorId",render:function(a){return l.a.createElement(fe,null,l.a.createElement(he,{colorId:a.match.params.colorId,palette:ea(e.findPalette(a.match.params.paletteId))}))}}),l.a.createElement(h.a,{render:function(a){return l.a.createElement(fe,null,l.a.createElement(ue,Object.assign({},a,{palettes:e.state.palettes,deletePalette:e.deletePalette})))}}))))}}),l.a.createElement(h.a,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E.a,null,l.a.createElement(aa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[222,1,2]]]);
//# sourceMappingURL=main.1f833eae.chunk.js.map