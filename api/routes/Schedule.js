const schedule = require('node-schedule');

var express = require("express");
const { Console } = require('console');
var router = express.Router();
var database = "VI-APP"

// Used to update the Cron Jobs (Update this to get and set jobs from the Document DB)
router.get("/update", function(req, res, next) {
    reqparams = router.stack
    const job = schedule.scheduleJob('42 * * * *', function(){
        console.log('The answer to life, the universe, and everything!');
        // Scrape a Segment
        // Do DB Updates and Writes
    });
    res.send("Updated Jobs")
});

//Call the API to Run a Manual Scrape
router.get("/scrape", function(req, res, next) {
    res.send("Running Scrape")
    items = loadfromDB({Name: "EntireASX"}, "stocklists", database)
});

router.get("/uploadlist", function(req, res, next) {
    res.send("Uploading Trackers")
    // Set a list of trackers here to upload
    var trackers = ["14D.AX","1ST.AX","3PL.AX","4DS.AX","5GN.AX","88E.AX","8CO.AX","8IH.AX","8EC.AX","8VI.AX","9SP.AX","ACB.AX","A2B.AX","ABP.AX","ABL.AX","AEG.AX","ABT.AX","ACS.AX","ACQ.AX","ACF.AX","ACR.AX","ACW.AX","ACU.AX","AD1.AX","ADA.AX","ADH.AX","1AD.AX","ADD.AX","ABC.AX","ADR.AX","AHZ.AX","ADY.AX","ADT.AX","ADJ.AX","ABV.AX","ADX.AX","AER.AX","AEI.AX","AFL.AX","AEB.AX","AFR.AX","A1G.AX","AFT.AX","AFP.AX","AGL.AX","AGJ.AX","AGR.AX","AHL.AX","A1M.AX","AGI.AX","A40.AX","AHQ.AX","AGS.AX","AGE.AX","A4N.AX","1AG.AX","AGH.AX","3DA.AX","ABR.AX","ADN.AX","AAR.AX","AGG.AX","ADO.AX","AGX1.AX","AHX.AX","ADI.AX","ADV.AX","AGY.AX","AHK.AX","AAJ.AX","AHY.AX","AFA.AX","AHN.AX","AIA.AX","ACP.AX","AD8.AX","AEE.AX","ABW.AX","A3D.AX","AC8.AX","AGD.AX","AAC.AX","AAP.AX","ABX.AX","AHF.AX","AEF.AX","AFG.AX","AFI.AX","AGM.AX","ABA.AX","AEV.AX","A200.AX","AGVT.AX","AAA.AX","ACDC.AX","4CE.AX","360.AX","1AL.AX","3DP.AX","A2M.AX","2BE.AX","AIB.AX","AIQ.AX","AIR.AX","AIS.AX","AIV.AX","AIY.AX","AIZ.AX","AJC.AX","AJJ.AX","AJL.AX","AJM.AX","AJQ.AX","AJX.AX","AJY.AX","AKG.AX","AKM.AX","AKN.AX","AKP.AX","AL3.AX","AL8.AX","ALC.AX","ALF.AX","ALG.AX","ALI.AX","ALK.AX","ALL.AX","ALQ.AX","ALT.AX","ALU.AX","ALX.AX","ALY.AX","AMA.AX","AMB.AX","AMC.AX","AMD.AX","AME.AX","AMG.AX","AMH.AX","AMI.AX","AML.AX","AMN.AX","AMO.AX","AMP.AX","AMS.AX","AMT.AX","AMX.AX","ANA.AX","ANG.AX","ANL.AX","ANN.AX","ANO.AX","ANP.AX","ANR.AX","ANS.AX","ANW.AX","ANZ.AX","AO1.AX","AOA.AX","AOF.AX","AON.AX","AOP.AX","AOU.AX","AOW.AX","APA.AX","APC.AX","APD.AX","APE.AX","APG.AX","APH.AX","API.AX","APL.AX","APT.AX","APV.AX","APW.AX","APX.AX","APZ.AX","AQC.AX","AQD.AX","AQG.AX","AQI.AX","AQR.AX","AQS.AX","AQX.AX","AQZ.AX","AR9.AX","ARA.AX","ARB.AX","ARC.AX","ARD.AX","ARE.AX","ARF.AX","ARG.AX","ARL.AX","ARM.AX","ARN.AX","ARO.AX","ARQ.AX","ARS.AX","ARU.AX","ARV.AX","AS1.AX","ASB.AX","ASG.AX","ASH.AX","ASIA.AX","ASN.AX","ASP.AX","ASQ.AX","AST.AX","ASW.AX","ASX.AX","AT1.AX","ATC.AX","ATEC.AX","ATH.AX","ATL.AX","ATM.AX","ATP.AX","ATR.AX","ATS.AX","ATU.AX","ATX.AX","AU1.AX","AU8.AX","AUB.AX","AUC.AX","AUDS.AX","AUH.AX","AUI.AX","AUL.AX","AUMF.AX","AUP.AX","AUQ.AX","AUR.AX","AUST.AX","AUT.AX","AUZ.AX","AV1.AX","AVA.AX","AVC.AX","AVE.AX","AVG.AX","AVH.AX","AVJ.AX","AVL.AX","AVN.AX","AVQ.AX","AVW.AX","AVZ.AX","AWC.AX","AWN.AX","AWV.AX","AWY.AX","AX1.AX","AX8.AX","AXE.AX","AXI.AX","AXT.AX","AYF.AX","AYI.AX","AYM.AX","AYR.AX","AYS.AX","AZI.AX","AZJ.AX","AZS.AX","AZT.AX","AZV.AX","AZY.AX","B2Y.AX","BAF.AX","BAP.AX","BAR.AX","BAS.AX","BAT.AX","BBC.AX","BBL.AX","BBN.AX","BBOZ.AX","BBUS.AX","BBX.AX","BC8.AX","BCB.AX","BCC.AX","BCI.AX","BCK.AX","BCL.AX","BCN.AX","BCT.AX","BD1.AX","BDA.AX","BDC.AX","BDG.AX","BDI.AX","BEAR.AX","BEE.AX","BEL.AX","BEM.AX","BEN.AX","BET.AX","BFC.AX","BFG.AX","BGA.AX","BGL.AX","BGP.AX","BGT.AX","BHD.AX","BHL.AX","BHP.AX","BID.AX","BILL.AX","BIN.AX","BIQ.AX","BIR.AX","BIS.AX","BIT.AX","BKI.AX","BKL.AX","BKT.AX","BKW.AX","BKY.AX","BLA.AX","BLD.AX","BLG.AX","BLK.AX","BLU.AX","BLV.AX","BLX.AX","BLY.AX","BLZ.AX","BMG.AX","BMH.AX","BMN.AX","BNDS.AX","BNKS.AX","BNL.AX","BNO.AX","BNR.AX","BOA.AX","BOC.AX","BOE.AX","BOL.AX","BOND.AX","BOQ.AX","BOT.AX","BPH.AX","BPL.AX","BPP.AX","BPT.AX","BRB.AX","BRG.AX","BRI.AX","BRK.AX","BRL.AX","BRN.AX","BRU.AX","BRV.AX","BSA.AX","BSE.AX","BSL.AX","BSM.AX","BSP.AX","BSR.AX","BSX.AX","BTC.AX","BTH.AX","BTI.AX","BUB.AX","BUD.AX","BUG.AX","BUX.AX","BUY.AX","BVS.AX","BWF.AX","BWP.AX","BWR.AX","BWX.AX","BXB.AX","BXN.AX","BYE.AX","BYH.AX","BYI.AX","C6C.AX","CA8.AX","CAA.AX","CAD.AX","CAE.AX","CAF.AX","CAG.AX","CAI.AX","CAJ.AX","CAM.AX","CAN.AX","CAP.AX","CAQ.AX","CAR.AX","CAT.AX","CAU.AX","CAV.AX","CAY.AX","CAZ.AX","CBA.AX","CBE.AX","CBR.AX","CBY.AX","CCA.AX","CCE.AX","CCG.AX","CCJ.AX","CCL.AX","CCP.AX","CCV.AX","CCX.AX","CCZ.AX","CD1.AX","CD2.AX","CD3.AX","CDA.AX","CDD.AX","CDH.AX","CDM.AX","CDP.AX","CDT.AX","CDV.AX","CDX.AX","CDY.AX","CE1.AX","CEL.AX","CEN.AX","CETF.AX","CFE.AX","CFO.AX","CG1.AX","CGA.AX","CGB.AX","CGC.AX","CGF.AX","CGL.AX","CGM.AX","CGN.AX","CGO.AX","CGR.AX","CGS.AX","CHC.AX","CHK.AX","CHN.AX","CHZ.AX","CI1.AX","CIA.AX","CIE.AX","CII.AX","CIM.AX","CIN.AX","CINPA.AX","CIO.AX","CIP.AX","CIW.AX","CKA.AX","CKF.AX","CL1.AX","CL8.AX","CLA.AX","CLB.AX","CLF.AX","CLH.AX","CLI.AX","CLQ.AX","CLT.AX","CLV.AX","CLW.AX","CLX.AX","CLZ.AX","CM1.AX","CM8.AX","CMC.AX","CMD.AX","CML.AX","CMM.AX","CMP.AX","CMW.AX","CNB.AX","CNEW.AX","CNI.AX","CNJ.AX","CNL.AX","CNU.AX","CNW.AX","COB.AX","COE.AX","COF.AX","COG.AX","COH.AX","COI.AX","COL.AX","COO.AX","CORE.AX","COS.AX","COY.AX","CP1.AX","CPH.AX","CPT.AX","CPU.AX","CPV.AX","CQE.AX","CQR.AX","CR1.AX","CRB.AX","CRED.AX","CRL.AX","CRM.AX","CRN.AX","CRO.AX","CRS.AX","CSD.AX","CSE.AX","CSL.AX","CSR.AX","CSS.AX","CST.AX","CT1.AX","CTD.AX","CTE.AX","CTM.AX","CTO.AX","CTP.AX","CTX.AX","CUE.AX","CUL.AX","CUP.AX","CURE.AX","CUV.AX","CUX.AX","CV1.AX","CVC.AX","CVF.AX","CVL.AX","CVN.AX","CVS.AX","CVV.AX","CVW.AX","CWL.AX","CWN.AX","CWP.AX","CWX.AX","CWY.AX","CWZ.AX","CXL.AX","CXM.AX","CXO.AX","CXU.AX","CXX.AX","CXZ.AX","CY5.AX","CYC.AX","CYG.AX","CYL.AX","CYM.AX","CYP.AX","CYQ.AX","CZI.AX","CZL.AX","CZN.AX","CZR.AX","D13.AX","D2O.AX","DAF.AX","DAU.AX","DAV.AX","DBBF.AX","DBF.AX","DCC.AX","DCG.AX","DCL.AX","DCN.AX","DCX.AX","DDD.AX","DDR.AX","DDT.AX","DEG.AX","DEM.AX","DEV.AX","DFM.AX","DGGF.AX","DGH.AX","DGO.AX","DGR.AX","DHG.AX","DHHF.AX","DHR.AX","DIV.AX","DJRE.AX","DJW.AX","DKM.AX","DLC.AX","DME.AX","DMG.AX","DMKT.AX","DMP.AX","DNA.AX","DNK.AX","DOR.AX","DOW.AX","DRE.AX","DRO.AX","DRUG.AX","DRX.AX","DSE.AX","DTC.AX","DTI.AX","DTL.AX","DTM.AX","DTR.AX","DTS.AX","DTZ.AX","DUB.AX","DUI.AX","DVL.AX","DVN.AX","DW8.AX","DWS.AX","DXB.AX","DXN.AX","DXS.AX","DYL.AX","DZZF.AX","E25.AX","E2E.AX","E2M.AX","EAF.AX","EAI.AX","EAS.AX","EAX.AX","EBG.AX","EBND.AX","EBO.AX","ECF.AX","ECG.AX","ECL.AX","ECP.AX","ECS.AX","ECT.AX","ECX.AX","ED1.AX","EDC.AX","EDE.AX","EEG.AX","EER.AX","EEU.AX","EFE.AX","EFF.AX","EGD.AX","EGF.AX","EGG.AX","EGH.AX","EGI.AX","EGL.AX","EGN.AX","EGO.AX","EGR.AX","EGY.AX","EHE.AX","EHH.AX","EHL.AX","EHX.AX","EIGA.AX","EINC.AX","ELD.AX","ELE.AX","ELO.AX","ELS.AX","ELT.AX","ELX.AX","EM1.AX","EM2.AX","EMB.AX","EMD.AX","EME.AX","EMH.AX","EMKT.AX","EML.AX","EMMG.AX","EMN.AX","EMP.AX","EMR.AX","EMT.AX","EMU.AX","EMUCA.AX","EMV.AX","EN1.AX","ENA.AX","ENB.AX","ENE.AX","ENN.AX","ENR.AX","ENT.AX","ENX.AX","EOF.AX","EOL.AX","EOR.AX","EOS.AX","EPD.AX","EPM.AX","EQE.AX","EQT.AX","EQX.AX","ERA.AX","ERF.AX","ERG.AX","ERL.AX","ERM.AX","ERX.AX","ESE.AX","ESGI.AX","ESH.AX","ESK.AX","ESL.AX","ESR.AX","ESTX.AX","ETF.AX","ETHI.AX","ETPMAG.AX","ETPMPD.AX","ETPMPM.AX","ETPMPT.AX","EUC.AX","EUR.AX","EVE.AX","EVN.AX","EVO.AX","EVS.AX","EVT.AX","EVZ.AX","EWC.AX","EX1.AX","EX20.AX","EXL.AX","EXO.AX","EXP.AX","EXR.AX","EZL.AX","F100.AX","FAIR.AX","FAM.AX","FANG.AX","FAR.AX","FAU.AX","FBR.AX","FBU.AX","FCG.AX","FCL.AX","FCT.AX","FDM.AX","FDV.AX","FDX.AX","FE8.AX","FEI.AX","FEL.AX","FEMX.AX","FEX.AX","FFC.AX","FFG.AX","FFI.AX","FFL.AX","FFR.AX","FGG.AX","FGO.AX","FGR.AX","FGX.AX","FHS.AX","FID.AX","FIG.AX","FIJ.AX","FIN.AX","FLC.AX","FLN.AX","FLOT.AX","FLT.AX","FMG.AX","FML.AX","FMS.AX","FNP.AX","FNT.AX","FOD.AX","FOOD.AX","FOR.AX","FPC.AX","FPH.AX","FPL.AX","FPP.AX","FRI.AX","FRM.AX","FRN.AX","FRX.AX","FSA.AX","FSF.AX","FSG.AX","FSI.AX","FTC.AX","FTT.AX","FTZ.AX","FUEL.AX","FUN.AX","FWD.AX","FXL.AX","FYI.AX","FZO.AX","FZR.AX","G1A.AX","G88.AX","GAL.AX","GAP.AX","GAS.AX","GBE.AX","GBM.AX","GBND.AX","GBP.AX","GBR.AX","GBZ.AX","GC1.AX","GCI.AX","GCR.AX","GCY.AX","GDF.AX","GDG.AX","GDI.AX","GDX.AX","GEAR.AX","GED.AX","GEM.AX","GES.AX","GEV.AX","GFI.AX","GFL.AX","GGE.AX","GGG.AX","GGUS.AX","GGX.AX","GIB.AX","GID.AX","GLA.AX","GLB.AX","GLE.AX","GLH.AX","GLIN.AX","GLL.AX","GLN.AX","GLV.AX","GMA.AX","GMC.AX","GMD.AX","GME.AX","GMG.AX","GML.AX","GMN.AX","GMR.AX","GMV.AX","GNC.AX","GNE.AX","GNG.AX","GNM.AX","GNX.AX","GO2.AX","GOLD.AX","GOO.AX","GOR.AX","GOVT.AX","GOW.AX","GOZ.AX","GPR.AX","GPS.AX","GPT.AX","GPX.AX","GRB.AX","GRL.AX","GRNV.AX","GROW.AX","GRR.AX","GRV.AX","GSM.AX","GSN.AX","GSS.AX","GSW.AX","GTE.AX","GTG.AX","GTK.AX","GTN.AX","GTR.AX","GUD.AX","GUL.AX","GVF.AX","GWA.AX","GWR.AX","GXY.AX","HACK.AX","HAS.AX","HAV.AX","HAW.AX","HBRD.AX","HCD.AX","HCH.AX","HCT.AX","HE8.AX","HEUR.AX","HFR.AX","HGH.AX","HGL.AX","HGM.AX","HGO.AX","HHM.AX","HHY.AX","HIL.AX","HIP.AX","HIT.AX","HJPN.AX","HLA.AX","HLO.AX","HLS.AX","HLX.AX","HM1.AX","HMC.AX","HMD.AX","HMO.AX","HMX.AX","HNG.AX","HNR.AX","HOG.AX","HOR.AX","HOT.AX","HPI.AX","HPR.AX","HRL.AX","HRN.AX","HRR.AX","HRZ.AX","HSC.AX","HSN.AX","HT1.AX","HT8.AX","HTA.AX","HTG.AX","HUB.AX","HUO.AX","HVM.AX","HVN.AX","HVST.AX","HWH.AX","HWK.AX","HXG.AX","HYD.AX","HZN.AX","HZR.AX","IAA.AX","IAF.AX","IAG.AX","IAM.AX","IAP.AX","IBC.AX","IBG.AX","IBX.AX","ICE.AX","ICG.AX","ICI.AX","ICN.AX","ICQ.AX","ICS.AX","ICT.AX","ICU.AX","ID8.AX","IDA.AX","IDT.AX","IDX.AX","IDZ.AX","IEC.AX","IEL.AX","IEM.AX","IEQ.AX","IEU.AX","IFL.AX","IFM.AX","IFN.AX","IFRA.AX","IFT.AX","IGB.AX","IGE.AX","IGL.AX","IGN.AX","IGO.AX","IHCB.AX","IHD.AX","IHEB.AX","IHHY.AX","IHL.AX","IHOO.AX","IHR.AX","IHVV.AX","IHWL.AX","IIND.AX","IJH.AX","IJP.AX","IJR.AX","IKE.AX","IKO.AX","IKW.AX","ILB.AX","ILC.AX","ILU.AX","IMA.AX","IMC.AX","IMD.AX","IME.AX","IMM.AX","IMPQ.AX","IMR.AX","IMS.AX","IMU.AX","INA.AX","INCM.AX","INES.AX","INF.AX","ING.AX","INIF.AX","INP.AX","INR.AX","INV.AX","IOD.AX","IOO.AX","IOZ.AX","IP1.AX","IPB.AX","IPC.AX","IPD.AX","IPH.AX","IPL.AX","IPT.AX","IQ3.AX","IRD.AX","IRE.AX","IRI.AX","IS3.AX","ISD.AX","ISEC.AX","ISO.AX","ISU.AX","ISX.AX","ITG.AX","IVC.AX","IVE.AX","IVO.AX","IVQ.AX","IVR.AX","IVT.AX","IVV.AX","IVX.AX","IVZ.AX","IWLD.AX","IXC.AX","IXI.AX","IXJ.AX","IXR.AX","IXU.AX","IZZ.AX","JAL.AX","JAN.AX","JAT.AX","JAY.AX","JBH.AX","JCI.AX","JCS.AX","JDR.AX","JHC.AX","JHG.AX","JHL.AX","JHX.AX","JIN.AX","JIP.AX","JJF.AX","JKA.AX","JLG.AX","JMS.AX","JPR.AX","JRL.AX","JRV.AX","JXT.AX","JYC.AX","K2F.AX","KAI.AX","KAM.AX","KAR.AX","KAS.AX","KAT.AX","KAU.AX","KBC.AX","KCN.AX",
    "KEY.AX","KFE.AX","KGD.AX","KGL.AX","KGM.AX","KGN.AX","KIN.AX","KIS.AX","KKC.AX","KKL.AX","KKO.AX","KLA.AX","KLL.AX","KLO.AX","KLR.AX","KMD.AX","KME.AX","KMT.AX","KNH.AX","KNM.AX","KNO.AX","KOR.AX","KOV.AX","KP2.AX","KPC.AX","KPE.AX","KPG.AX","KPO.AX","KPT.AX","KRM.AX","KRR.AX","KRS.AX","KSC.AX","KSL.AX","KSM.AX","KSN.AX","KSS.AX","KTA.AX","KTD.AX","KTE.AX","KTG.AX","KWR.AX","KYK.AX","KZA.AX","KZR.AX","LAA.AX","LAM.AX","LAU.AX","LAW.AX","LBL.AX","LBT.AX","LCD.AX","LCE.AX","LCK.AX","LCL.AX","LCM.AX","LCT.AX","LCY.AX","LEG.AX","LEP.AX","LER.AX","LEX.AX","LGP.AX","LGR.AX","LHB.AX","LHM.AX","LI3.AX","LIC.AX","LIN.AX","LIO.AX","LIT.AX","LKE.AX","LKO.AX","LLC.AX","LLO.AX","LME.AX","LMG.AX","LML.AX","LNG.AX","LNK.AX","LNU.AX","LNY.AX","LOM.AX","LON.AX","LOT.AX","LOV.AX","LPD.AX","LPDRC.AX","LPE.AX","LPI.AX","LRM.AX","LRS.AX","LRT.AX","LSA.AX","LSF.AX","LSH.AX","LSR.AX","LSX.AX","LTR.AX","LVE.AX","LVH.AX","LVT.AX","LYC.AX","LYL.AX","M7T.AX","M8S.AX","MA1.AX","MAD.AX","MAG.AX","MAH.AX","MAI.AX","MAM.AX","MAN.AX","MAQ.AX","MAT.AX","MAU.AX","MAUCA.AX","MAX.AX","MAY.AX","MBK.AX","MBM.AX","MCA.AX","MCB.AX","MCE.AX","MCM.AX","MCP.AX","MCR.AX","MCT.AX","MCX.AX","MCY.AX","MDC.AX","MDI.AX","MDR.AX","MDX.AX","MEA.AX","MEB.AX","MEC.AX","MEI.AX","MEL.AX","MEM.AX","MEP.AX","MEQ.AX","MEU.AX","MEY.AX","MEZ.AX","MFD.AX","MFF.AX","MFG.AX","MGC.AX","MGE.AX","MGG.AX","MGL.AX","MGR.AX","MGT.AX","MGU.AX","MGV.AX","MGX.AX","MGZ.AX","MHC.AX","MHD.AX","MHG.AX","MHH.AX","MHI.AX","MHJ.AX","MICH.AX","MIH.AX","MIL.AX","MIN.AX","MIO.AX","MIR.AX","MJC.AX","MKG.AX","MLD.AX","MLL.AX","MLM.AX","MLS.AX","MLT.AX","MLX.AX","MME.AX","MMI.AX","MMJ.AX","MML.AX","MMM.AX","MMR.AX","MMS.AX","MNB.AX","MND.AX","MNF.AX","MNRS.AX","MNS.AX","MNW.AX","MNY.AX","MOAT.AX","MOB.AX","MOC.AX","MOE.AX","MOGL.AX","MOH.AX","MONY.AX","MOQ.AX","MOT.AX","MOY.AX","MOZ.AX","MP1.AX","MPH.AX","MPL.AX","MPO.AX","MPP.AX","MPR.AX","MPW.AX","MPX.AX","MQG.AX","MQR.AX","MRC.AX","MRD.AX","MRG.AX","MRL.AX","MRM.AX","MRQ.AX","MRR.AX","MRV.AX","MRZ.AX","MSB.AX","MSE.AX","MSG.AX","MSI.AX","MSM.AX","MSR.AX","MSTR.AX","MSV.AX","MTB.AX","MTC.AX","MTH.AX","MTL.AX","MTO.AX","MTS.AX","MVA.AX","MVB.AX","MVE.AX","MVF.AX","MVOL.AX","MVP.AX","MVR.AX","MVS.AX","MVW.AX","MWR.AX","MWY.AX","MX1.AX","MXC.AX","MXI.AX","MXR.AX","MXT.AX","MYE.AX","MYL.AX","MYQ.AX","MYR.AX","MYS.AX","MYX.AX","MZI.AX","MZZ.AX","N1H.AX","NAB.AX","NAC.AX","NAE.AX","NAG.AX","NAM.AX","NAN.AX","NBI.AX","NC6.AX","NCC.AX","NCK.AX","NCL.AX","NCM.AX","NCR.AX","NCZ.AX","NDIA.AX","NDQ.AX","NEA.AX","NEC.AX","NES.AX","NET.AX","NEU.AX","NEW.AX","NGE.AX","NGI.AX","NGY.AX","NHC.AX","NHF.AX","NIC.AX","NIU.AX","NME.AX","NML.AX","NMT.AX","NNT.AX","NOR.AX","NOV.AX","NOX.AX","NSB.AX","NSC.AX","NSE.AX","NSR.AX","NST.AX","NSX.AX","NTD.AX","NTI.AX","NTL.AX","NTM.AX","NTO.AX","NTU.AX","NUC.AX","NUF.AX","NUH.AX","NUS.AX","NVA.AX","NVO.AX","NVU.AX","NVX.AX","NWC.AX","NWE.AX","NWF.AX","NWH.AX","NWL.AX","NWM.AX","NWS.AX","NWSLV.AX","NXE.AX","NXM.AX","NXS.AX","NXT.AX","NYR.AX","NZK.AX","NZM.AX","NZS.AX","OAR.AX","OAU.AX","OBJ.AX","OBL.AX","OBM.AX","OCA.AX","OCC.AX","OCL.AX","ODA.AX","ODM.AX","ODY.AX","OEC.AX","OEL.AX","OEQ.AX","OEX.AX","OFX.AX","OGA.AX","OGC.AX","OGX.AX","OIL.AX","OKJ.AX","OKR.AX","OKU.AX","OLH.AX","OLI.AX","OLL.AX","OLV.AX","OMH.AX","OML.AX","ONE.AX","ONT.AX","ONX.AX","OOK.AX","OOO.AX","OPC.AX","OPH.AX","OPL.AX","OPT.AX","OPY.AX","ORA.AX","ORE.AX","ORG.AX","ORI.AX","ORM.AX","ORN.AX","ORR.AX","OSH.AX","OSL.AX","OSP.AX","OSX.AX","OTW.AX","OVH.AX","OVN.AX","OVT.AX","OXX.AX","OZF.AX","OZG.AX","OZL.AX","OZR.AX","P2P.AX","PAA.AX","PAB.AX","PAC.AX","PAF.AX","PAI.AX","PAK.AX","PAL.AX","PAN.AX","PAR.AX","PAXX.AX","PBH.AX","PBP.AX","PBX.AX","PCG.AX","PCH.AX","PCI.AX","PCK.AX","PCL.AX","PDI.AX","PDL.AX","PDN.AX","PDZ.AX","PE1.AX","PEC.AX","PEK.AX","PEL.AX","PEN.AX","PET.AX","PEX.AX","PFG.AX","PFP.AX","PG1.AX","PGC.AX","PGF.AX","PGG.AX","PGH.AX","PGI.AX","PGL.AX","PGM.AX","PGR.AX","PGX.AX","PGY.AX","PIA.AX","PIC.AX","PIL.AX","PIN.AX","PIO.AX","PIQ.AX","PIXX.AX","PKD.AX","PKO.AX","PKS.AX","PL8.AX","PLC.AX","PLL.AX","PLS.AX","PLUS.AX","PLX.AX","PM1.AX","PM8.AX","PMC.AX","PME.AX","PMGOLD.AX","PMV.AX","PMY.AX","PNC.AX","PNI.AX","PNL.AX","PNN.AX","PNR.AX","PNV.AX","PNW.AX","PNX.AX","PO3.AX","POD.AX","POS.AX","POU.AX","POW.AX","PPC.AX","PPE.AX","PPG.AX","PPH.AX","PPK.AX","PPL.AX","PPS.AX","PPT.AX","PPY.AX","PRM.AX","PRN.AX","PRO.AX","PRT.AX","PRU.AX","PRX.AX","PRZ.AX","PSA.AX","PSC.AX","PSI.AX","PSL.AX","PSQ.AX","PSZ.AX","PTB.AX","PTL.AX","PTM.AX","PTR.AX","PTX.AX","PUA.AX","PUR.AX","PVE.AX","PVL.AX","PVS.AX","PWG.AX","PWH.AX","PWL.AX","PWN.AX","PWNCA.AX","PXS.AX","PXX.AX","PYC.AX","PYG.AX","QAG.AX","QAN.AX","QAU.AX","QBE.AX","QCB.AX","QEM.AX","QFE.AX","QFN.AX","QFY.AX","QGL.AX","QHAL.AX","QHL.AX","QIP.AX","QLTY.AX","QMIX.AX","QOZ.AX","QPON.AX","QPR.AX","QRE.AX","QRI.AX","QSS.AX","QTG.AX","QTM.AX","QUAL.AX","QUB.AX","QUE.AX","QUS.AX","QVE.AX","R3D.AX","RAC.AX","RAG.AX","RAN.AX","RAP.AX","RARI.AX","RBD.AX","RBL.AX","RBR.AX","RBTZ.AX","RBX.AX","RCB.AX","RCE.AX","RCL.AX","RCP.AX","RCT.AX","RCW.AX","RD1.AX","RDC.AX","RDF.AX","RDG.AX","RDH.AX","RDM.AX","RDN.AX","RDS.AX","RDV.AX","RDY.AX","RE1.AX","REA.AX","RED.AX","REE.AX","REF.AX","REG.AX","REH.AX","REIT.AX","RENT.AX","RES.AX","REV.AX","REX.AX","REY.AX","REZ.AX","RF1.AX","RFF.AX","RFG.AX","RFN.AX","RFR.AX","RFT.AX","RFX.AX","RGB.AX","RGI.AX","RGL.AX","RGS.AX","RHC.AX","RHI.AX","RHP.AX","RHT.AX","RHY.AX","RIC.AX","RIE.AX","RIM.AX","RINC.AX","RIO.AX","RKN.AX","RLC.AX","RLE.AX","RLG.AX","RLT.AX","RMC.AX","RMD.AX","RMG.AX","RMI.AX","RML.AX","RMP.AX","RMS.AX","RMT.AX","RMX.AX","RMY.AX","RND.AX","RNE.AX","RNO.AX","RNT.AX","RNU.AX","RNX.AX","RNY.AX","ROBO.AX","ROG.AX","ROO.AX","RPG.AX","RPM.AX","RRL.AX","RSG.AX","RSH.AX","RSM.AX","RTE.AX","RTG.AX","RTR.AX","RUL.AX","RVR.AX","RVS.AX","RWC.AX","RWD.AX","RXH.AX","RXL.AX","RXM.AX","RXP.AX","RYD.AX","RZI.AX","S2R.AX","S32.AX","S66.AX","SAM.AX","SAN.AX","SAR.AX","SAS.AX","SAU.AX","SAVE.AX","SBI.AX","SBM.AX","SBR.AX","SBU.AX","SBW.AX","SCG.AX","SCI.AX","SCL.AX","SCN.AX","SCP.AX","SCT.AX","SCU.AX","SDA.AX","SDF.AX","SDG.AX","SDI.AX","SDL.AX","SDV.AX","SDX.AX","SE1.AX","SEC.AX","SEI.AX","SEK.AX","SELF.AX","SEN.AX","SEQ.AX","SER.AX","SES.AX","SF1.AX","SFC.AX","SFG.AX","SFM.AX","SFR.AX","SFX.AX","SFY.AX","SGC.AX","SGF.AX","SGH.AX","SGI.AX","SGLLV.AX","SGM.AX","SGO.AX","SGP.AX","SGQ.AX","SGR.AX","SHE.AX","SHH.AX","SHJ.AX","SHK.AX","SHL.AX","SHM.AX","SHO.AX","SHV.AX","SI6.AX","SIG.AX","SIH.AX","SIL.AX","SIO.AX","SIQ.AX","SIS.AX","SIT.AX","SIV.AX","SIX.AX","SKC.AX","SKF.AX","SKI.AX","SKN.AX","SKO.AX","SKT.AX","SKY.AX","SL1.AX","SLC.AX","SLF.AX","SLK.AX","SLM.AX","SLR.AX","SLX.AX","SLZ.AX","SM1.AX","SMC.AX","SMG.AX","SMI.AX","SMLL.AX","SMN.AX","SMP.AX","SMR.AX","SMX.AX","SNC.AX","SND.AX","SNL.AX","SNS.AX","SNZ.AX","SO4.AX","SOL.AX","SOM.AX","SOP.AX","SOR.AX","SP3.AX","SPK.AX","SPL.AX","SPQ.AX","SPT.AX","SPX.AX","SPY.AX","SPZ.AX","SRG.AX","SRH.AX","SRI.AX","SRK.AX","SRN.AX","SRV.AX","SRY.AX","SRZ.AX","SSG.AX","SSL.AX","SSLPA.AX","SSM.AX","SSO.AX","SST.AX","ST1.AX","STA.AX","STC.AX","STG.AX","STM.AX","STN.AX","STO.AX","STW.AX","STX.AX","SUBD.AX","SUD.AX","SUH.AX","SUL.AX","SUN.AX","SUP.AX","SVA.AX","SVD.AX","SVH.AX","SVL.AX","SVM.AX","SVS.AX","SVW.AX","SVY.AX","SW1.AX","SWF.AX","SWK.AX","SWM.AX","SWTZ.AX","SXA.AX","SXE.AX","SXL.AX","SXX.AX","SXY.AX","SYA.AX","SYD.AX","SYI.AX","SYR.AX","SYS.AX","SYT.AX","SZL.AX","T3D.AX","TAH.AX","TAM.AX","TAO.AX","TAP.AX","TAR.AX","TAS.AX","TBL.AX","TBR.AX","TCL.AX","TCN.AX","TCO.AX","TD1.AX","TDI.AX","TDL.AX","TDO.AX","TDY.AX","TECH.AX","TEG.AX","TEK.AX","TER.AX","TFL.AX","TGA.AX","TGF.AX","TGG.AX","TGH.AX","TGM.AX","TGN.AX","TGO.AX","TGP.AX","TGR.AX","THC.AX","THD.AX","THR.AX","TIA.AX","TIE.AX","TIG.AX","TIN.AX","TIP.AX","TKF.AX","TKL.AX","TKM.AX","TLG.AX","TLM.AX","TLS.AX","TLT.AX","TLX.AX","TMG.AX","TMK.AX","TML.AX","TMR.AX","TMT.AX","TMX.AX","TMZ.AX","TNE.AX","TNG.AX","TNK.AX","TNP.AX","TNR.AX","TNT.AX","TNY.AX","TOE.AX","TOM.AX","TON.AX","TOP.AX","TOT.AX","TOU.AX","TPC.AX","TPD.AX","TPM.AX","TPO.AX","TPP.AX","TPS.AX","TPW.AX","TRA.AX","TRL.AX","TRM.AX","TRS.AX","TRT.AX","TRY.AX","TSC.AX","TSL.AX","TSO.AX","TTA.AX","TTB.AX","TTI.AX","TTL.AX","TTM.AX","TTT.AX","TV2.AX","TWD.AX","TWE.AX","TWR.AX","TYM.AX","TYR.AX","TYX.AX","TZL.AX","TZN.AX","UBA.AX","UBE.AX","UBI.AX","UBJ.AX","UBN.AX","UBP.AX","UBU.AX","UBW.AX","UCM.AX","UCW.AX","UMAX.AX","UMG.AX","UNL.AX","UNV.AX","UOS.AX","URF.AX","URW.AX","USD.AX","UTR.AX","UUL.AX","UUV.AX","UWL.AX","VACF.AX","VAE.AX","VAF.AX","VAH.AX","VAL.AX","VAN.AX","VAP.AX","VAR.AX","VAS.AX","VBLD.AX","VBND.AX","VBS.AX","VCF.AX","VCX.AX","VDBA.AX","VDCO.AX","VDGR.AX","VDHG.AX","VEA.AX","VEC.AX","VEE.AX","VEFI.AX","VEN.AX","VEQ.AX","VESG.AX","VEU.AX","VG1.AX","VG8.AX","VGAD.AX","VGB.AX","VGE.AX","VGI.AX","VGL.AX","VGMF.AX","VGS.AX","VHT.AX","VHY.AX","VIA.AX","VIC.AX","VIF.AX","VIG.AX","VII.AX","VIP.AX","VISM.AX","VIV.AX","VKA.AX","VLC.AX","VLS.AX","VLT.AX","VMC.AX","VMG.AX","VMIN.AX","VML.AX","VMS.AX","VMT.AX","VMX.AX","VMY.AX","VN8.AX","VOC.AX","VOL.AX","VOR.AX","VP7.AX","VPC.AX","VPR.AX","VR1.AX","VR8.AX","VRC.AX","VRL.AX","VRS.AX","VRT.AX","VRX.AX","VSO.AX","VTG.AX","VTH.AX","VTI.AX","VTS.AX","VUK.AX","VUL.AX","VVA.AX","VVLU.AX","VVR.AX","VXR.AX","VYS.AX","WAA.AX","WAF.AX","WAM.AX","WAT.AX","WAX.AX","WBC.AX","WBE.AX","WBT.AX","WCMQ.AX","WCN.AX","WDIV.AX","WDMF.AX","WEB.AX","WEC.AX","WEL.AX","WEMG.AX","WES.AX","WFE.AX","WGB.AX","WGN.AX","WGO.AX","WGX.AX","WHA.AX","WHC.AX","WHF.AX","WHFPA.AX","WHK.AX","WIC.AX","WJA.AX","WKT.AX","WLC.AX","WLD.AX","WLE.AX","WLF.AX","WMI.AX","WML.AX","WNB.AX","WND.AX","WNR.AX","WNS.AX","WOA.AX","WOR.AX","WOW.AX","WPL.AX","WPP.AX","WQG.AX","WRLD.AX","WRM.AX","WSA.AX","WSI.AX","WSP.AX","WTC.AX","WTL.AX","WVOL.AX","WWG.AX","WWI.AX","WXHG.AX","WXOZ.AX","WZR.AX","XAM.AX","XARO.AX","XCD.AX","XF1.AX","XPD.AX","XPE.AX","XPL.AX","XRF.AX","XRO.AX","XST.AX","XTC.AX","XTD.AX","XTE.AX","YAL.AX","YANK.AX","YBR.AX","YMAX.AX","YOJ.AX","YOW.AX","YPB.AX",
    "YRL.AX","Z1P.AX","Z3RO.AX","ZEL.AX","ZEN.AX","ZER.AX","ZEU.AX","ZGL.AX","ZIM.AX","ZIP.AX","ZLD.AX","ZMI.AX","ZMICA.AX","ZNC.AX","ZNO.AX","ZUSD.AX","ZYAU.AX","ZYB.AX","ZYUS"]
    // Name of the Trackers list
    var Name = "EntireASX";

    items = savetoDB({Name: Name, Trackers: trackers}, "stocklists", database)
});

async function iterateTrackers(stocks) {
    var stocklist = stocks[0].Trackers
    let sleep = require('util').promisify(setTimeout);

    var count = 1;
    for(i = 0; stocklist.length >= i; i= i+4 ){
        stocksgroup = [stocklist[i],stocklist[i+1],stocklist[i+2],stocklist[i+3]]
        await sleep(8000).then(stocksgroup.map((tracker) => scrapedata(tracker)))
        console.log(stocksgroup)
    }
    
}

function scrapedata(tracker) {

    console.log("Scraping: " + tracker);
    
    const { spawn } = require('child_process');
    const pyprog = spawn('python', ['../yfinance/yfinance.py', tracker]);

    pyprog.stdout.on('data', function(data) {
        var formattedJSON = (data.toString().replace(/{'/g, '{\"').replace(/\\/g, '.').replace(/'}/g, '\"}').replace(/': '/g, '\": \"').replace(/', '/g, '\", \"').replace(/':/g, '\":').replace(/, '/g, ', \"').replace(/None/g, '0').replace(/False/g, '0').replace(/True/g, '1').replace(/52Week/g, 'fiftytwoWeek').replace(/\"}\s/g, '\",'));
        if (/^[\],:{}\s]*$/.test(formattedJSON.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            try{
                dataObject = JSON.parse(formattedJSON)
                dataObject = {
                    tracker: tracker,
                    longName: dataObject.longName,
                    longBusinessSummary: dataObject.longBusinessSummary,

                    //market prices
                    regularMarketPrice: dataObject.regularMarketPrice,
                    regularMarketDayHigh: dataObject.regularMarketDayHigh,
                    open: dataObject.open,
                    previousClose: dataObject.previousClose,

                    //business details
                    logo_url: dataObject.logo_url,
                    industry: dataObject.industry,
                    sector: dataObject.sector,
                    country: dataObject.country,
                    address: dataObject.address,
                    state: dataObject.state,
                    phone: dataObject.phone,
                    website: dataObject.website,

                    //growth indicators
                    earningsQuarterlyGrowth: dataObject.earningsQuarterlyGrowth,
                    fiveYearAvgDividendYield: dataObject.fiveYearAvgDividendYield,
                    pegRatio: dataObject.pegRatio,
                    debtToEquity: dataObject.analysis.financialData.debtToEquity,
                    returnOnEquity: dataObject.analysis.financialData.returnOnEquity,
                    growthRate: dataObject.analysis.earningsTrend.trend[4].growth,

                    //earnings indicators
                    trailingPE: dataObject.trailingPE,
                    forwardPE: dataObject.forwardPE,
                    trailingEps: dataObject.trailingEps,
                    forwardEps: dataObject.forwardEps,

                    //recommendations chart data
                    rec0mperiod: dataObject.analysis.recommendationTrend.trend[0].period,
                    rec0mstrongbuy: dataObject.analysis.recommendationTrend.trend[0].strongBuy,
                    rec0mbuy: dataObject.analysis.recommendationTrend.trend[0].buy,
                    rec0mhold: dataObject.analysis.recommendationTrend.trend[0].hold,
                    rec0msell: dataObject.analysis.recommendationTrend.trend[0].sell,
                    rec0mstrongsell: dataObject.analysis.recommendationTrend.trend[0].sell,
                    rec1mperiod: dataObject.analysis.recommendationTrend.trend[1].period,
                    rec1mstrongbuy: dataObject.analysis.recommendationTrend.trend[1].strongBuy,
                    rec1mbuy: dataObject.analysis.recommendationTrend.trend[1].buy ,
                    rec1mhold: dataObject.analysis.recommendationTrend.trend[1].hold ,
                    rec1msell: dataObject.analysis.recommendationTrend.trend[1].sell ,
                    rec1mstrongsell: dataObject.analysis.recommendationTrend.trend[1].sell ,
                    rec2mperiod: dataObject.analysis.recommendationTrend.trend[2].period ,
                    rec2mstrongbuy: dataObject.analysis.recommendationTrend.trend[2].strongBuy ,
                    rec2mbuy: dataObject.analysis.recommendationTrend.trend[2].buy ,
                    rec2mhold: dataObject.analysis.recommendationTrend.trend[2].hold ,
                    rec2msell: dataObject.analysis.recommendationTrend.trend[2].sell ,
                    rec2mstrongsell: dataObject.analysis.recommendationTrend.trend[2].sell ,
                    rec3mperiod: dataObject.analysis.recommendationTrend.trend[3].period ,
                    rec3mstrongbuy: dataObject.analysis.recommendationTrend.trend[3].strongBuy ,
                    rec3mbuy: dataObject.analysis.recommendationTrend.trend[3].buy ,
                    rec3mhold: dataObject.analysis.recommendationTrend.trend[3].hold ,
                    rec3msell: dataObject.analysis.recommendationTrend.trend[3].sell,
                    rec3mstrongsell: dataObject.analysis.recommendationTrend.trend[3].sell,
                }
                console.log("Attempting to Save... " +tracker);
                savetoDB( {Tracker: tracker, Time: Date.now().toString(), data: dataObject}, "scraped", database);
            }
            catch{
                console.log("Error Occurred: " + tracker);
                savetoDB( {Name: tracker, error: "Error Occurred"}, "scrape-failures", database);
            }
        }
        else{
            console.log("Failed Validation: " + tracker);
            savetoDB( {Name: tracker, error: "Failed Validation"}, "scrape-failures", database);
        }
    });
}

function savetoDB(data, collection, database) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var myobj = data;
        dbo.collection(collection).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

function loadfromDB(query, collection, database) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var items

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        dbo.collection(collection, function (err, dbcollection) {
                dbcollection.find(query).toArray(function(err, items) {
                if(err) throw err;
                console.log(items);
                iterateTrackers(items);
            });
            
        });             
    });
}

module.exports = router;