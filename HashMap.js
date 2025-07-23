export class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity).fill(null).map(() => []);
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const prime = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    _resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;

        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        
        bucket.push([key, value]);
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
            this._resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for (const pair of bucket) {
            if (pair[0] === key) return pair[1];
        }
        return null;
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const i = bucket.findIndex(([k]) => k === key);

        if (i !== -1) {
            bucket.slice(i, 1);
            this.size--;
            return true;
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
    }
    
    keys() {
        const keys = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                keys.push(key);
            }
        }
        return keys;
    }

    values() {
        const values = [];
        for (const bucket of this.buckets) {
            for (const [, value] of bucket) {
                values.push(value);
            }
        }
        return values;
    }

    entries() {
        const entries = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                entries.push(pair);
            }
        }
        return entries;
    }

}