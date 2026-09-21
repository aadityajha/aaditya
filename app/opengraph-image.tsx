import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Aaditya Jha — MBBS Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#0c0c0b',color:'#f1eee7',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'70px',fontFamily:'Arial'}}><div style={{fontSize:22,letterSpacing:8,color:'#a5a19a'}}>AADITYA JHA</div><div style={{display:'flex',flexDirection:'column'}}><div style={{fontSize:92,lineHeight:1}}>MBBS Student</div><div style={{fontSize:28,color:'#a5a19a',marginTop:22}}>Chitwan Medical College · Tribhuvan University · Nepal</div></div><div style={{fontSize:16,letterSpacing:5,color:'#77736d'}}>AADITYA-JHA.COM.NP</div></div>,{...size});}
