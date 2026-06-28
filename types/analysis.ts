import { CompanyProfile } from "./company";
import { InvestmentResult } from "./investment";

export interface AnalysisResponse {

    profile: CompanyProfile;

    investment: InvestmentResult;

}