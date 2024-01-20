// use actix_web::{web, HttpResponse, Responder};
// use aws_sdk_rust::model::GetObjectInput;
// use aws_sdk_rust::output::S3GetObjectOutput;
// use aws_sdk_rust::Client;
// use aws_sdk_rust::Error;
// use aws_sdk_rust::Region;
// use dotenv::dotenv;
// use std::env;
//
//
// #[get("/songs")]
// pub async fn get_genre_songs(pool: web::Data<PgPool>) -> impl Responder {
//     let region = Region::from_str(env::var("AWS_REGION").unwrap()).unwrap();
//     let config = aws_config::load_from_env().region(region);
//     let client = Client::from_conf(config);
//
//     let get_s3_file = GetObjectInput::builder()
//         .bucket(env::var("AWS_S3_BUCKET_NAME").unwrap())
//         .key(filename)
//         .build();
//
//     let resp: S3GetObjectOutput = client.send(get_s3_file).await?;
//
//     let stream = resp.body.unwrap();
//     let mut buf = Vec::new();
//     stream
//         .try_for_each(|item| {
//             buf.extend(item?);
//             async { Ok(()) }
//         })
//         .await?;
//
//     Ok(buf)
// }
