export interface Teacher {
    teacherid ? : string;
    name ?: {
      first ? : string,
      last ? : string
    },
    image ? : string,
    dateOfBirth ? : string,
    emails ? : 
      {
        email ?: string,
        primary ?: Boolean
      }[],
    phones ? : 
      {
        phone ? : string,
        primary ? : Boolean
      }[],
    sex ? : string,
    subjects ? : 
      {
        subject ? : string
      }[],
    description ?: string,
  }