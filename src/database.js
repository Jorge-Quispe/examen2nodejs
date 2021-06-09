import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-52-4-111-46.compute-1.amazonaws.com',
user:'rudnialcfxpjlk',
password:'971e222eab5fe04396d0f777c99935c431693ec8686930786ffe223f8da8ad2c',
database:'dboou2k8224elc',
port:5432,
ssl: { rejectUnauthorized: false}

}
);