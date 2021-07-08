<script>
import { ListBucketsCommand } from "@aws-sdk/client-s3"

import { S3Client } from "@aws-sdk/client-s3"
const REGION = "us-east-1"
const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: 'AKIAXGYXHSXXHYBR5HOE',
    secretAccessKey: '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',
  },
});

console.log(s3Client)

const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
}
run()


// const s3Client = new S3Client({
//   credentials: {
//     // AWS S3
//     accessKeyId: 'AKIAXGYXHSXXHYBR5HOE',
//     secretAccessKey: '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',
//   },
//   region: REGION,
// })

</script>
