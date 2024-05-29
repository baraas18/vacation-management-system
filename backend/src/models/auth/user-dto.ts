import CredentialsDTO from './credentials-dto';

export default interface DTO extends CredentialsDTO{
    id: string;
    firstName: string;
    lastName: string;
    role: string;
}

