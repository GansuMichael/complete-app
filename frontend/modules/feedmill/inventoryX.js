// inventory.js

import { db } from "./firebase-config.js";
import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const DB_NAME = "FeedMillDB";
const DB_VERSION = 1;
const STORE_NAME = "inventory";