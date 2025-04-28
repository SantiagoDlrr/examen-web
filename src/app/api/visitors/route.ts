import visitorHttpHandler from '../../backend/routes/VisitorRoutes';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const mockRes: any = {
    status: (statusCode: number) => ({
      json: (data: any) => NextResponse.json(data, { status: statusCode }),
    }),
    json: (data: any) => NextResponse.json(data),
  };

  return await visitorHttpHandler.login({ body } as any, mockRes);
}