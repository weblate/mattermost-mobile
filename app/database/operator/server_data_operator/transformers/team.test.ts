// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {
    transformMyTeamRecord,
    transformSlashCommandRecord,
    transformTeamChannelHistoryRecord,
    transformTeamMembershipRecord,
    transformTeamRecord,
    transformTeamSearchHistoryRecord,
} from '@database/operator/server_data_operator/transformers/team';
import {createTestConnection} from '@database/operator/utils/create_test_connection';
import {OperationType} from '@typings/database/enums';

describe('*** TEAM Prepare Records Test ***', () => {
    it('=> transformSlashCommandRecord: should return an array of type SlashCommand', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'team_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformSlashCommandRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    id: 'command_1',
                    auto_complete: true,
                    auto_complete_desc: 'mock_command',
                    auto_complete_hint: 'hint',
                    create_at: 1445538153952,
                    creator_id: 'creator_id',
                    delete_at: 1445538153952,
                    description: 'description',
                    display_name: 'display_name',
                    icon_url: 'display_name',
                    method: 'get',
                    team_id: 'teamA',
                    token: 'token',
                    trigger: 'trigger',
                    update_at: 1445538153953,
                    url: 'url',
                    username: 'userA',
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('SlashCommandModel');
    });

    it('=> transformMyTeamRecord: should return an array of type MyTeam', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'team_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformMyTeamRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    team_id: 'teamA',
                    roles: 'roleA, roleB, roleC',
                    is_unread: true,
                    mentions_count: 3,
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('MyTeamModel');
    });

    it('=> transformTeamRecord: should return an array of type Team', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'team_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformTeamRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    id: 'rcgiyftm7jyrxnmdfdfa1osd8zswby',
                    create_at: 1445538153952,
                    update_at: 1588876392150,
                    delete_at: 0,
                    display_name: 'Contributors',
                    name: 'core',
                    description: '',
                    email: '',
                    type: 'O',
                    company_name: '',
                    allowed_domains: '',
                    invite_id: 'codoy5s743rq5mk18i7u5dfdfksz7e',
                    allow_open_invite: true,
                    last_team_icon_update: 1525181587639,
                    scheme_id: 'hbwgrncq1pfcdkpotzidfdmarn95o',
                    group_constrained: null,
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('TeamModel');
    });

    it('=> transformTeamChannelHistoryRecord: should return an array of type Team', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'team_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformTeamChannelHistoryRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    team_id: 'a',
                    channel_ids: ['ca', 'cb'],
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('TeamChannelHistoryModel');
    });

    it('=> transformTeamSearchHistoryRecord: should return an array of type TeamSearchHistory', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'team_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformTeamSearchHistoryRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    team_id: 'a',
                    term: 'termA',
                    display_term: 'termA',
                    created_at: 1445538153952,
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('TeamSearchHistoryModel');
    });

    it('=> transformTeamMembershipRecord: should return an array of type TeamMembership', async () => {
        expect.assertions(3);

        const database = await createTestConnection({databaseName: 'team_prepare_records', setActive: true});
        expect(database).toBeTruthy();

        const preparedRecords = await transformTeamMembershipRecord({
            action: OperationType.CREATE,
            database: database!,
            value: {
                record: undefined,
                raw: {
                    team_id: 'a',
                    user_id: 'ab',
                    roles: '3ngdqe1e7tfcbmam4qgnxp91bw',
                    delete_at: 0,
                    scheme_user: true,
                    scheme_admin: false,
                    msg_count: 0,
                    mention_count: 0,
                },
            },
        });

        expect(preparedRecords).toBeTruthy();
        expect(preparedRecords!.collection.modelClass.name).toBe('TeamMembershipModel');
    });
});