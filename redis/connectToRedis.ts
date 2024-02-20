import logger from '@/logger/log-util';
import { createClient, RedisClientType } from 'redis';

let redisClient: RedisClientType | null = null;

const connectToRedis = async (): Promise<RedisClientType> => {
    if (!redisClient) {
        redisClient = createClient({
            password: 'XnchlcTBWoleK3oMQ2On6CsLRthGNWLr',
            socket: {
                host: 'redis-15912.c323.us-east-1-2.ec2.cloud.redislabs.com',
                port: 15912
            }
        });

        redisClient.on('error', (err) => logger.error('Redis Client Error', err));

        // Connect to the Redis server
        await redisClient.connect();
    }

    // At this point, redisClient is guaranteed to be set and connected
    return redisClient;
};

export default connectToRedis;