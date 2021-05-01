import Sharesdisplay from "../components/Sharesdisplay";

import "../styles.css";

export default function ASX100() {
    
    const Symbols = ["TLS.AX","CSL.AX","CBA.AX","BHP.AX","WES.AX","FMG.AX","WOW.AX","MQG.AX","WBC.AX","RIO.AX","ANZ.AX","RMD.AX","GMG.AX","COL.AX","NAB.AX","WPL.AX","APT.AX","BXB.AX","AMC.AX","ALL.AX","ASX.AX","A2M.AX","SHL.AX","RHC.AX","REA.AX","QBE.AX","APA.AX","IAG.AX","XRO.AX","COH.AX","SYD.AX","SUN.AX","SCG.AX","MFG.AX","NST.AX","AGL.AX","S32.AX","EVN.AX","ORG.AX","DXS.AX","AZJ.AX","JHX.AX","MGR.AX","TAH.AX","QAN.AX","QAN.AX","WTC.AX","AST.AX","SAR.AX","OSH.AX","DMP.AX","CCL.AX","ALX.AX","CWN.AX","VCX.AX","AMP.AX","BSL.AX","QUB.AX","NXT.AX","JBH.AX","ANN.AX","SOL.AX","WOR.AX","CHC.AX","BLD.AX","MPL.AX","GPT.AX","TWE.AX","LLC.AX","SGP.AX","STO.AX","SEK.AX","CIM.AX","CPU.AX","ALD.AX","ORI.AX","CAR.AX","CWY.AX","ALU.AX","OZL.AX","SKI.AX","BEN.AX","IPL.AX","ILU.AX","AWC.AX","ALQ.AX","BPT.AX","CGF.AX","BOQ.AX","SGR.AX","DOW.AX","ORA.AX","NEC.AX","RWC.AX","LNK.AX","NHF.AX","FLT.AX","VUK.AX"]

    return (
      <div>
        {Symbols.map((Symbol) => <Sharesdisplay Symbol={Symbol} />)}
      </div>
    );
}





