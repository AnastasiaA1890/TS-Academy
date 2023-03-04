import { mockData1, mockData2, mockUrls } from './mocks';

function createObj(url: string, mock: object) {
  let testedObjectData = {
    url: url,
    mock: mock
  }
  return testedObjectData
}

export const TestedArray = [createObj(mockUrls.url1, mockData1)/* ,createObj(mockUrls.url2, mockData2) */]