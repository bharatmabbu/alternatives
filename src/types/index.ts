// Common Types
export type Status = 'Queued' | 'Running' | 'Success' | 'Failed';

export interface DataSource {
  dataSourceId: string;
  dataSourceType: string;
  connectionString: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DataTarget {
  dataTargetId: string;
  dataTargetType: string;
  connectionString: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface File {
  fileId: string;
  originalFileName: string;
  fileType: string;
  fileSize: number;
  checksum: string;
  sourceId: string;
  targetId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transformation {
  transformationId: string;
  transformationName: string;
  description: string;
  script: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  jobId: string;
  fileId: string;
  transformationId: string;
  status: Status;
  startTime: Date;
  endTime?: Date;
  logFileLocation: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  metadataId: string;
  fileId: string;
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}