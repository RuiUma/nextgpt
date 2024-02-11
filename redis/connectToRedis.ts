import { createClient, RedisClientType } from 'redis';

let redisClient: RedisClientType | null = null;

const connectToRedis = async (): Promise<RedisClientType> => {
    if (!redisClient) {
        redisClient = createClient({
            url: 'redis://localhost:6379' // Specify your Redis server URI here
        });

        redisClient.on('error', (err) => console.error('Redis Client Error', err));

        // Connect to the Redis server
        await redisClient.connect();
        console.log('Connected to Redis');
    }

    // At this point, redisClient is guaranteed to be set and connected
    return redisClient;
};

export default connectToRedis;