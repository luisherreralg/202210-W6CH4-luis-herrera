import { program } from 'commander';
import * as dotenv from 'dotenv';
dotenv.config();

program.option('-p, --port <char>');
program.parse();
const { port } = program.opts();

const portUser = port || process.env.PORT;

export const portHandler = () => {
    return portUser;
};
