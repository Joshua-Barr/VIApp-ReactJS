import React, { useState } from "react";
import ShareSort from "../components/SharesSort";

import "../styles.css";

export default function FTSE100() {
    const [sortBy, setSortBy] = useState('none');
    const [shares, setShares] = useState(<div className="spinner">Select an indicator above...  </div>)
    
    const Symbols = ["III.L","ADM.L","AAL.L","ANTO.L","AHT.L","ABF.L","AZN.L","AUTO.L","AVST.L","AVV.L","AV.L","BME.L","BA.L","BARC.L","BDEV.L","BKG.L","BHP.L","BP.L","BATS.L","BLND.L","BT.A.L","BNZL.L","BRBY.L","CCH.L","CPG.L","CRH.L","CRDA.L","DCC.L","DGE.L","ENT.L","EVR.L","EXPN.L","FERG.L","FLTR.L","FRES.L","GSK.L","GLEN.L","HLMA.L","HL.L","HIK.L","HSBA.L","IHG.L","IMB.L","INF.L","ICP.L","IAG.L","ITRK.L","JD.L","JMAT.L","JET.L","KGF.L","LAND.L","LGEN.L","LLOY.L","LSEG.L","MNG.L","MRO.L","MNDI.L","NG.L","NWG.L","NXT.L","OCDO.L","PSON.L","PSH.L","PSN.L","PHNX.L","POLY.L","PRU.L","RB.L","REL.L","RSW.L","RTO.L","RMV.L","RIO.L","RR.L","RDSA.L","RSA.L","SGE.L","SBRY.L","SDR.L","SMT.L","SGRO.L","SVT.L","SMDS.L","SMIN.L","SN.L","SKG.L","SPX.L","SSE.L","STAN.L","SLA.L","STJ.L","TW.L","TSCO.L","ULVR.L","UU.L","VOD.L","WEIR.L","WTB.L","WPP"]

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