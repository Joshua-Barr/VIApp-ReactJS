import Sharesdisplay from "../components/Sharesdisplay";

import "../styles.css";

export default function FTSE100() {
    
    const Symbols = ["III.L","ADM.L","AAL.L","ANTO.L","AHT.L","ABF.L","AZN.L","AUTO.L","AVST.L","AVV.L","AV.L","BME.L","BA.L","BARC.L","BDEV.L","BKG.L","BHP.L","BP.L","BATS.L","BLND.L","BT.A.L","BNZL.L","BRBY.L","CCH.L","CPG.L","CRH.L","CRDA.L","DCC.L","DGE.L","ENT.L","EVR.L","EXPN.L","FERG.L","FLTR.L","FRES.L","GSK.L","GLEN.L","HLMA.L","HL.L","HIK.L","HSBA.L","IHG.L","IMB.L","INF.L","ICP.L","IAG.L","ITRK.L","JD.L","JMAT.L","JET.L","KGF.L","LAND.L","LGEN.L","LLOY.L","LSEG.L","MNG.L","MRO.L","MNDI.L","NG.L","NWG.L","NXT.L","OCDO.L","PSON.L","PSH.L","PSN.L","PHNX.L","POLY.L","PRU.L","RB.L","REL.L","RSW.L","RTO.L","RMV.L","RIO.L","RR.L","RDSA.L","RSA.L","SGE.L","SBRY.L","SDR.L","SMT.L","SGRO.L","SVT.L","SMDS.L","SMIN.L","SN.L","SKG.L","SPX.L","SSE.L","STAN.L","SLA.L","STJ.L","TW.L","TSCO.L","ULVR.L","UU.L","VOD.L","WEIR.L","WTB.L","WPP"];
    
    return (
      <div>
        {Symbols.map((Symbol) => <Sharesdisplay Symbol={Symbol} />)}
      </div>
    );
}
