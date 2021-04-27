import "../styles.css";

export default function Home() {
    
    const home_class = "home" 
    const linkedin= "https://au.linkedin.com/in/joshua-barr-03049a10b"

    return (
      <div class={home_class}>
        There are not many places on the internet that offer long term stock evaluations based on fundamental indicators.<br/><br/>
        This tool aims to solve this problem by offering an easy and effective way to analyse individual stocks. <br/><br/><br/>
        
        Use this tool at your own risk. Please use the Menu to select an Index or use one of the provided utilities...<br/><br/>
        <div><a href={linkedin} >Developed by Joshua Barr</a></div>
      </div>
    );
}