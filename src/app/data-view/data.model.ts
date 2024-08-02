export interface dateOfBirth {
    year: number;
    month: number;
    dayOfMonth: number;
    hourOfDay: number;
    minute: number;
    second: number;
}

export interface userInfo {
    authMrn: string;
    accessToken: string;
    source: string;
    age: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: dateOfBirth;
    mrn: number;
    mobile: string;
    dob: string;
    email: string;
    alternateMobile: string;    
    walletBalance: string;
    customerSince: string;
    whatsappComm: number;
    organizationCode: string;
    tenantCode: string;
    isAdmin: number;
    isFirstLogin: number;
    id_type: number;
    modeId: string;
    colorPalleteId: string;
    languageId: string;
}

export interface apiResponse {
    reason: string;
    login_response: userInfo;
    status: string;
}

export type KeyValuePair = {
    key: string;
    value: any
}