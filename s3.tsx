import AWS from 'aws-sdk'

interface S3Config {
    accessKeyId: string
    secretAccessKey: string
    url: string
    bucket: string
}

const config: S3Config = {
    accessKeyId: '73SXHLKO4P9AI6AJYAXG',
    secretAccessKey: 'dCAdiS07o7tV4tgLEQl15eUv4A8u9vZS98amGEiC',
    url: 'https://s3.csh.rit.edu',
    bucket: 'songarchive',
}

const s3: AWS.S3 = new AWS.S3({
    endpoint: config.url,
    s3ForcePathStyle: true,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: 'us-east-1',
})

export { config, s3 }
