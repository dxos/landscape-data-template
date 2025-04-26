// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema';

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'dxos',
  Name: 'DXOS',
  Description: 'DXOS is an open source framework for building real-time, collaborative web applications.',
  Website: 'https://dxos.org',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node'],
    },
    LanguageSDK: {
      data: ['TypeScript'],
    },
  },
  Networking: {
    Protocol: {
      data: ['WebRTC', 'WebSockets'],
      comment: 'P2P connections are made via WebRTC, and client-server connections are made via WebSockets.',
    },
    Topology: {
      data: 'P2P',
      comment: 'Always available data optionally provided by server-based peers.',
    },
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['N/A'],
    },
    DataModelParadigm: {
      data: 'Document',
    },
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Async', 'Signals-based Reactivity'],
    },
    LocalRefreshLatency: {
      data: '10-50ms',
      comment: 'Data is stored as Automerge documents under the hood.',
    },
    PersistenceMechanism: {
      data: ['IndexedDB'],
    },
    PersistenceFeatures: {
      data: 'Indexes',
      comment: 'Custom indexes coming soon.',
    },
    DataModel: {
      data: 'Document',
    },
    SchemaManagement: {
      data: ['Schema definition', 'Schema migrations', 'Schema validation on write'],
      comment:
        'Schemas are defined using Effect Schema, and are validated on write. Migrations are supported at the object level.',
    },
    OfflineReads: {
      data: 'Full Support',
    },
    OptimisticUpdates: {
      data: 'Yes',
    },
    OfflineWrites: {
      data: 'Full local conflict resolution',
    },
    DataSize: {
      data: 'up to 5-10mb per object',
      comment: 'Objects are Automerge documents under the hood.',
    },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Full Replication'],
      comment: 'Full replication of all spaces joined per identity.',
    },
    ConflictHandling: {
      data: 'Automatic via CRDT',
      comment: 'Automerge is the CRDT used under the hood.',
    },
    WhereResolutionOccurs: {
      data: 'Client',
    },
    WhatGetsSynced: {
      data: {
        ClientToClient: 'see Automerge',
      },
      comment: 'Automerge is the CRDT used under the hood.',
    },
    Authority: {
      data: 'Decentralized',
    },
  },
  AuthIdentity: {
    Encryption: {
      data: 'Transport-level encryption',
      comment: 'Data is not currently encrypted at rest. E2EE is planned via Keyhive.',
    },
    AuthenticationMethod: {
      data: ['Public keys'],
    },
    AuthorizationPermissions: {
      data: 'RBAC',
    },
  },
  UIRelated: {
    RichTextEditing: {
      data: 'Yes',
      comment: 'Anything compatible with Automerge documents (e.g. CodeMirror, ProseMirror, etc.)',
    },
    Components: {
      data: ['Invitations', 'Presence'],
      comment:
        'React components for performing invitations are provided. SDK provides which peers you are connected to.',
    },
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['DevTools', 'Data Inspector', 'Network Inspector'],
    },
    CLI: {
      data: 'CLI which contains a full client and commands for managing identities, spaces, etc.',
    },
    TypeSupport: {
      data: 'Full type support via Effect Schema',
    },
  },
});
