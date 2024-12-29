<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Package for unifying all response result that will be shared across all microservice and APIGATEWAY.

## Exported Interfaces

#### IResponse

<Strong>Propties : </strong> {data: T, status: number, mssg: string}

## Exported functions

#### SuccefulResponse
<strong> Default status : 200</strong>
<strong> Default mssg : OK</strong>
> params : data of type T 


#### ErrorApi
<strong> Default status : 500</strong>
<strong> Default mssg : Error Service</strong>
> params : mssg of type string

#### ErrorData
<strong> Default status : 400</strong>
> params : mssg of type string

## Changing default proprties 

you can change default value returned by <strong> SuccefulResponse, ErrorApi, ErrorData </strong> by using setters like :

> setMssg(params : string);

> setData(params : T);

> setStatus(params : number);

# Examples

```bash
 return SuccefulResponse({x:1,y:2});
 return SuccefulResponse({x:1,y:2}).setStatus(304).setMssg("Data not changed");
```
