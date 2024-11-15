import http from "k6/http";
import { check, sleep } from "k6";

const url =
  "https://core-api.test.rkn.zxz.su/api/v1/rps_core/external_requests/creative/";

export const options = {
  vus: 1,
  //duration: "1s",
  iterations: 60,
};

export default function () {
  let data = {
    creative_source_id: [
      "0973dd26-df52-4c21-9860-bb4dbf7310db",
      "0da150dc-4937-4373-be85-712db50b39ae",
      "0ea98a1e-8520-42d9-a28a-5ddb68ef8b01",
      "0f0c046c-6e1f-46cf-884e-a9be68321ed5",
      "0fef4eca-c80e-4321-b7e9-8f099fdd0de0",
      "14c1b2c1-d975-4557-bccb-fe1ba1db6783",
      "1b459f9e-eeeb-416b-9bac-9dc00dce8939",
      "1e5b97af-3173-4ded-b735-c229e3faafa9",
      "1e78286b-c41e-407f-9858-f3caa80647e3",
      "21b1f161-7e61-48fd-88b1-c5ce76048285",
      "228724eb-94f0-4c9a-9b18-352da2e64eea",
      "270dc830-8e6d-4088-92ec-5476c0731c6a",
      "2d98bfde-e521-4bb6-8378-d8baeeb94cb0",
      "2f1ac342-f610-4042-9c7e-96a8c0c4accf",
      "33d45b28-b90d-4ddb-812d-800972d02207",
      "3a4f2b51-dabc-4ea3-860e-9ce07f1f96ea",
      "3ad1cfa5-8705-4a2e-bca0-1cb59b05a291",
      "3d708dae-f457-435b-8426-03fc08c21cdc",
      "3fcba9f6-8e47-4553-a454-4d508404eb59",
      "4cf9b3d2-77de-43ce-b7aa-cbf29c58be46",
      "59de9762-c8b5-4f92-83b0-f5e9deee04d9",
      "5afd7096-eb4c-4977-98ea-bffe3edcc2b0",
      "5b1f97d0-5ea1-42c6-bc16-09424073aa36",
      "600cb118-0caf-4356-b7f7-c634bf329dfc",
      "61ec7b2e-d401-4cdf-a1bc-93948a6c092a",
      "633abad7-2cc3-4ba0-8f68-ef64443cff8a",
      "67eb2ddc-49b1-43bd-8473-8e081dea8628",
      "694a535a-95f8-45f4-b792-883d1a70fc86",
      "6afcb11a-34b5-4f69-9655-db04997fcf6b",
      "713c712e-70c9-4548-9e6f-fab0e0d5516e",
      "757b41d1-b285-4c5e-9c4c-4a10f0fa30ff",
      "80137450-c548-40b0-9b56-28f04a356b43",
      "886959a0-66f8-4521-857e-cc9e9c3e07ce",
      "8cda2d53-0bd4-4e05-adb0-bb96080392ea",
      "907981bc-35ca-4ca2-8787-6f6c42621fbf",
      "91054d63-3fe4-45dc-b4a0-62f0920ee004",
      "92ee5644-868a-4231-bd8e-b73a0d5a239c",
      "93098674-ad95-49e1-a025-e1190ae8666b",
      "93d19411-a7d2-4bce-8fa4-bedac68cee73",
      "943591ac-62fb-482d-bb79-bf4cc5849543",
      "9b5005d3-9aef-41ac-8587-faf67b8c9e88",
      "9ff2423c-1ca2-4494-a89c-7d9349d317ab",
      "a09ce37d-c512-4bf4-8751-7cd665396ec4",
      "a14556d9-826d-495e-a9cc-faedffa134a9",
      "a21eafd0-a966-4c9e-9697-e7423590ff9c",
      "a5e202fe-f847-4ae0-a117-e2d86974cbc9",
      "a62cb9bf-3b74-4df2-9fc9-2c36baca7572",
      "a938bfa6-2cbb-4d18-806b-98f4ac962ff5",
      "aa00ea34-d20e-4b1e-9072-08b70cf56aeb",
      "ab6724fb-37fe-4783-bef1-6b4668a4d0bb",
    ],
  };

  let headers = { "Content-Type": "application/json" };
  let res = http.post(url, JSON.stringify(data), { headers: headers });

  let responseBody = JSON.parse(res.body);

  check(res, {
    "Статус всех ответов 200": (r) => r.status === 200,
    "В ответе 50 статусов Креативов": () => responseBody.length === 50,
  });
}
