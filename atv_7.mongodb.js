const database ='BD3-ATV2-GEOVANNA';
const collection ='bd3-atv2-produtos';
use(database);

db[collection].find() .sort({"valor": 1});