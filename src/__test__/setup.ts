/* eslint-disable no-undef */
import dbManager from "../database/dbManager"

const dbMan = new dbManager()
 beforeAll(() => dbMan.start())

 afterAll(() => dbMan.stop())