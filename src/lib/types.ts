export interface MVALeadPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  zip: string;
  answers: {
    not_at_fault: string;
    injured: string;
    when: string;
    role: string;
    passenger_fault: string;
    fault: string;
    claimant_fault: string;
    insured: string;
    um: string;
    household_um: string;
    another_vehicle: string;
    visible_damage: string;
    police: string;
    liability_accepted: string;
    treatment_timing: string;
    treatment_status: string;
    representation: string;
    retained: string;
    rejected: string;
    attorney_dropped: string;
    settled: string;
    adult: string;
    guardian: string;
    working: string;
    government_vehicle: string;
    state: string;
    ca_insured: string;
    residence_state: string;
  };
  trustedform_cert_url: string;
  universal_leadid: string;
  consent_text: string;
  page_url: string;
  ip_address: string;
  user_agent: string;
  submitted_at: string;
}

export interface StepField {
  id: string;
  name: string;
  label: string;
  type: 'select' | 'text' | 'tel' | 'email';
  placeholder?: string;
  options?: { label: string; value: string }[];
  condition?: (answers: Record<string, string>, currentStep?: number) => boolean;
  required?: boolean;
  helperText?: string;
}
