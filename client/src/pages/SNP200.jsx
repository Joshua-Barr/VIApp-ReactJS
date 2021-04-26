
import Sharesdisplay from "../components/Sharesdisplay";

import "../styles.css";

export default function SNP200() {
    
    //JUST FOR TESTING
    const Symbols = ["AAPL","MSFT","AMZN","FB","GOOGL"];
    //const Symbols = ["AAPL","MSFT","AMZN","FB","GOOGL","GOOG","BRK.B","JNJ","PG","V","NVDA","MA","HD","JPM","UNH","VZ","ADBE","DIS","CRM","PYPL","MRK","INTC","NFLX","CMCSA","T","PFE","WMT","KO","PEP","ABT","BAC","TMO","MCD","CSCO","NKE","COST","ABBV","XOM","AVGO","AMGN","ACN","MDT","NEE","CVX","UNP","BMY","DHR","QCOM","TXN","LIN","LOW","PM","LLY","ORCL","UPS","HON","IBM","AMT","SBUX","WFC","LMT","CHTR","FIS","AMD","C","NOW","RTX","SPGI","MDLZ","CAT","GILD","BA","ISRG","TGT","BLK","ZTS","CVS","MO","PLD","VRTX","DE","BKNG","GS","CCI","EQIX","SYK","CL","TMUS","D","BDX","APD","TJX","ANTM","ATVI","DUK","CI","FDX","CSX","CME","REGN","MMC","ADP","SHW","SO","MS","ITW","ICE","MU","NSC","FISV","PGR","BSX","AMAT","GE","GPN","CB","HUM","DG","NOC","KMB","NEM","ADSK","ECL","TFC","USB","EL","LRCX","EW","AON","MCO","PNC","WM","BIIB","ILMN","ADI","ROP","DD","BAX","ETN","SCHW","AEP","EMR","LHX","DLR","EA","DXCM","GM","CTSH","COP","GIS","XEL","SBAC","CMG","DOW","EBAY","TWTR","EXC","SRE","ORLY","PSA","GD","CNC","SYY","IDXX","COF","TEL","ROST","HCA","APH","JCI","SNPS","CMI","STZ","A","WEC","MSCI","VRSK","MNST","KLAC","INFO","CDNS","TT","ALL","IQV","PCAR","TROW","PPG","CTAS","MET","YUM","TRV","ZBH","ES","PEG","BK","CLX","AZO","BLL","KR","TDG","ANSS","F","MSI","WLTW","AWK","ADM","WBA","FAST","SWK","OTIS","PH","ROK","HPQ","ALXN","MCHP","ED","FTV","MAR","PRU","CARR","XLNX","PAYX","WMB","RMD","BBY","DHI","KMI","AFL","MCK","GLW","PSX","MTD","HLT","MKC","SLB","AIG","APTV","SWKS","CHD","ALGN","FCX","VFC","AME","LUV","WELL","DTE","LEN","EOG","DLTR","CPRT","CTVA","CERN","AVB","VRSN","HSY","STT","O","PPL","WY","FLT","AJG","WST","RSG","SPG","EIX","ETR","KHC","AEE","MPC","DAL","ARE","VLO","EFX","TTWO","KEYS","LYB","AKAM","MXIM","ODFL","KSU","AMP","FRC","EQR","LH","MKTX","VMC","CMS","TSN","CAG","AMCR","CTXS","VIAC","TSCO","HOLX","DFS","COO","DPZ","CDW","INCY","NTRS","VAR","K","DOV","FTNT","KMX","GWW","IP","CBRE","FE","EXPD","TFX","LVS","VTR","XYL","BR","QRVO","DGX","MAS","PXD","STE","PEAK","FITB","NDAQ","ABC","MLM","CHRW","GPC","NVR","BF.B","ETSY","ZBRA","NUE","FMC","EXR","HRL","CAH","PAYC","GRMN","SYF","TYL","CTLT","IEX","IR","DRE","PKI","ESS","CE","HIG","MAA","EXPE","DRI","TER","SJM","TIF","IFF","ULTA","NLOK","URI","JKHY","LNT","PHM","AES","HPE","WAT","ABMD","J","LDOS","SIVB","CINF","MTB","FBHS","BXP","TDY","KEY","EVRG","JBHT","ATO","HAL","WAB","WHR","WDC","IT","ETFC","HES","ANET","RCL","OMC","BIO","STX","EMN","RF","CFG","CNP","AAP","CBOE","PFG","PKG","AVY","LUMN","HAS","UAL","NTAP","CPB","XRAY","UDR","FOXA","LW","WU","HBAN","ALLE","OXY","ALB","CXO","MGM","WRB","BKR","RJF","HSIC","WRK","UHS","PNW","L","RE","NI","TXT","GL","SNA","COG","LKQ","BWA","IRM","PNR","ROL","NRG","AOS","HST","PWR","DISH","MYL","LYV","AIZ","CCL","FFIV","JNPR","WYNN","CF","LB","DVA","MOS","HWM","NWL","IPG","TAP","PRGO","DISCK","RHI","AAL","REG","SEE","IPGP","HII","MHK","HBI","LNC","BEN","LEG","CMA","NWSA","VNO","FRT","AIV","FANG","ZION","NLSN","FLIR","PVH","KIM","TPR","PBCT","ALK","FOX","DXC","NBL","APA","IVZ","NOV","NCLH","RL","GPS","DVN","MRO","FLS","UNM","DISCA","XRX","SLG","HFC","FTI","UAA","UA","NWS"];

    return (
      <div>
        {Symbols.map((Symbol) => <Sharesdisplay Symbol={Symbol} />)}
      </div>
    );
}





