import { createSnowflake } from "./bg.js";
import { dateDuJour, jourAvantNoel, noel } from "./dates.js";
import { genererLesBoules } from "./genererLesBoules.js";
import { ouvrirBoule } from "./ouverturesBoule.js";
import { authoriserOuverture } from "./ouvrirBoullesAuthorisees.js";

dateDuJour();
noel();
authoriserOuverture();
jourAvantNoel();
genererLesBoules();
createSnowflake();
ouvrirBoule();