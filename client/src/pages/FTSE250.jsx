import React, { useState } from "react";
import ShareSort from "../components/SharesSort";

import "../styles.css";

export default function FTSE250() {
    const [sortBy, setSortBy] = useState('none');
    const [shares, setShares] = useState(<div className="spinner">Select an indicator above...  </div>)
    
    const Symbols = ["3IN","FOUR","888","ASL","AGK","AAF","ATST","ATT","AO","APAX","ASCL","ASHM","AGR","AML","AGT","AVON","BAB","BGFD","BGS","USA","BBY","BNKR","BBGI","BBH","BEZ","AJB","BWY","BIFF","BYG","BRSC","BRWM","BGSC","BOY","BRW","BVIC","BYIT","CCR","CNE","CLDN","CPI","CAPC","CCL","CEY","CNA","CHG","CHRY","CINE","CTY","CSH","CKN","CBG","CLI","CMCX","COA","CCC","GLO","CTEC","CSP","CWK","CRST","DPH","DLN","DPLM","DLG","DGOC","DC","DOM","DRX","DOCS","DNLM","EZJ","EDIN","EWI","ECM","ELM","ENOG","ESNT","ERM","JEO","FDM","FXPO","FCSS","FEV","FSV","FGT","FGP","FCIT","FSFL","FRAS","FUTR","GAW","GYS","GCP","DIGS","GSS","GNS","GFTU","GRI","GPOR","UKW","GNC","GRG","HMSO","HVPE","HAS","HTWS","HSL","HRI","HGT","HICL","HILS","HFG","SONG","HSX","HOC","HSV","HWDN","IBST","ICGT","IGG","IMI","IEM","INCH","INDV","IHP","INPP","INVP","IPO","ITV","IWG","JLEN","JLG","JII","JAM","JESC","JFJ","JTC","JUP","JUST","KNOS","LRE","LWDB","LIO","LMP","LXI","EMG","MKS","MSLH","MDC","MGGT","MRC","MCRO","MAB","MTO","MONY","MNKS","MGAM","MGNS","MRW","MUT","MYI","NEX","NETW","N91","OTB","OXB","OXIG","PAGE","PIN","PAG","PENN","PNL","POG","PETS","PTEC","PLUS","PCT","PSSL","PLP","PFD","PHP","PFG","PRTC","PZC","QQ","QLT","RNK","RAT","REDD","RDW","RTN","RHIM","RCP","ROR","RMG","SBRE","SAFE","SNN","SVS","SDP","SOI","SAIN","SEQI","SRP","SHB","SIG","SRE","SSON","SCT","SXS","SPT","SSPG","SMP","SYNC","SYNT","TATE","TBCG","TEP","TMPL","TEM","TRIG","TIFS","TCAP","TRN","TPK","BBOX","TRY","TUI","TLW","UDG","UKCM","ULE","UTG","VEC","VSVS","VCT","VEIL","VOF","VMUK","VTY","VVO","WOSG","JDW","SMWH","WTAN","WIZZ","WG","WKP","WWH","XPP"]

    const handleChange = event => {
        setSortBy(event.target.value);
        setShares(<ShareSort Symbols={Symbols} />)
    };

    return (
        <div>
        <select name="sort" id="sortables" onChange={handleChange} >
            <option value="none"></option>
            <option value="fair price">Price Ratio (Fair/Current)</option>
            <option value="stock price">Current Stock Price</option>
        </select>
        <div>
            {shares}
        </div>
        </div>
    );
}