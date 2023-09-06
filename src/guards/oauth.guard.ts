import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client } from "google-auth-library"

@Injectable()
export class OAuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ){
    const request = context.switchToHttp().getRequest();
    const credentials = this.extractCredentialsFromHeader(request);
    if (!credentials) {
      throw new UnauthorizedException("Credenciais não enviadas");
    }
    const {clientId, credential} = credentials;
    const client = new OAuth2Client();
    try{
        await client.verifyIdToken({
            idToken: credential,
            audience: clientId  
        })
        return true;
    }catch(error){
        throw new UnauthorizedException(error.message)
    }
  }
  private extractCredentialsFromHeader(request: any): {clientId:string, credential:string} {
    const credentials = JSON.parse(request.header.authorization)
    return credentials;
  }
}