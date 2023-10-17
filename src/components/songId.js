import { v4 as uuid } from 'uuid';

function songId() {
    return uuid()
}

export default songId;