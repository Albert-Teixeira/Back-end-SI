import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import jwtDecode from 'jwt-decode';
import { OAuth2Client } from "google-auth-library"

@Injectable()
export class OAuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ){
    const request = context.switchToHttp().getRequest();
    const credentials = request.headers.authorization;

    if (!credentials)
      throw new UnauthorizedException("Credenciais não enviadas");

    const [prefixo, token] = credentials.split(" ");

    if (!token) 
      throw new UnauthorizedException("Credenciais não enviadas");

    if (prefixo !== "Bearer")
      throw new UnauthorizedException("Prefixo inválido");


    let decoded: {aud:string};

    try {
      decoded = jwtDecode(token);
    }
    catch (error) {
      throw new UnauthorizedException(error.message)
    }

    const client = new OAuth2Client();
    
    try{
        await client.verifyIdToken({
            idToken: token,
            audience: decoded.aud,
        })
        request.user = decoded;
        return true;
    }catch(error){
        throw new UnauthorizedException(error.message)
    }
  }
}